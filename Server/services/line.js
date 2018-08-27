import axios from 'axios';
import cron from 'node-cron';
import moment from 'moment';
import config from '../config';
import homeworkModel from '../api/homework/homework.model';

const sendPush = (to, messages) => {
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

export default () => {
  homeworkModel.find((err, docs) => {
    if (err) return;

    let text = '';

    docs.map(item => {
      const { desc, due_date } = item;
      const subject = 'Subject: '.concat(desc).concat('\n');
      const due = 'Due: '.concat(due_date).concat('\n');
      text += subject + due;
      return item;
    });

    const messages = [{
      type: 'text',
      text,
    }];

    console.log(messages);

    sendPush('Uaa7caad531b558caecf9fa249d3ee538', messages);
  });
}