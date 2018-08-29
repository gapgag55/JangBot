import axios from 'axios';
import cron from 'node-cron';
import moment from 'moment';
import config from '../config/line';
import Homework from '../api/homework/homework.model';

export const sendPush = (to, messages) => {
  axios.post('https://api.line.me/v2/bot/message/push', {
    to,
    messages,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.channelAccessToken}`
    },
  });
};

const formatData = (docs) => {
  let text = '';
  docs.forEach((item, index) => {
    let {
      subject,
      description,
      due_date
    } = item;

    subject = `Subject: ${subject}\n`;
    description = `${description}\n`;
    due_date = `Due: ${due_date}`;

    if (index == docs.length - 1)
      due_date = `${due_date}\n`;

    text += `${subject}${description}${due_date}`;
  });
  return text;
}

export default () => {
  Homework.find((err, docs) => {
    if (err) return;

    const messages = [{
      type: 'text',
      text: formatData(docs),
    }];

    // sendPush('Uaa7caad531b558caecf9fa249d3ee538', messages);
  });
}