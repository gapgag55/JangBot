import axios from 'axios';
import cron from 'node-cron';
import moment from 'moment';
import Homework from '../api/homework/homework.model';

export const sendPush = (to, messages) => {
  axios.post('https://api.line.me/v2/bot/message/push', {
    to,
    messages,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.LINE_CHANNEL_TOKEN}`
    },
  });
};

const formatData = (item, rangeDay) => {
  let { subject, description, date } = item;
  let remainDay;

  subject = `Subject: ${subject}\n`;
  description = `Desc: ${description}\n`;
  date = `Due: ${moment(date).format('LL')}\n`;

  if (rangeDay == 0) {
    remainDay = `----| Today |-----`;
  } else {
    remainDay = `----| ${Math.abs(rangeDay)} day(s) left |-----`;
  }

  return `${subject}${description}${date}${remainDay}`;
}

export default () => {

  // 1. Run code below every morning of the day.

  // 2. Find works that today - submitted day in range appoinment day
  // Today - SubmittedDay < Appointment
  // Ex. |2 - 4| < 3 && 2 - 4 < 0 = true
  // Ex. |5 - 4| < 3 && 5 - 4 < 0 = false -> Change to status of homework

  // Run every 6 am of the day.
  // cron.schedule("* * 6 * * *", function(){
  //   console.log("---------------------");
  //   console.log("Running Cron Job every 6 second");
  // });

  cron.schedule("*/1 * * * *", () => {
    console.log("---------------------");
    console.log("Running Cron Job every 6 second");

    Homework.find((err, docs) => {
      if (err) return;

      // Sort homework by due date.

      docs.map(item => {
        const { _id, date, appointment } = item;

        if (item.status == 'deactive') {
          return item;
        }

        // today - submittedDay < appointment
        const rangeDay = moment(new Date()).diff(moment(date), 'days');

        if (rangeDay > 0) {
          Homework.update({ _id }, {$set: { status: 'deactive' }})
          return item;
        }

        if (Math.abs(rangeDay) < appointment) {
          console.log(Math.abs(rangeDay), appointment);
          // Alert to Group
          const messages = [{
            type: 'text',
            text: formatData(item, rangeDay),
          }];

          sendPush('Uaa7caad531b558caecf9fa249d3ee538', messages);
        }

        return item;
      });
    })
  });
}