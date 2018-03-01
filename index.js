// index.js
const {RtmClient, RTM_EVENTS, WebClient} = require('@slack/client');

const students = [
  '...student names'
];

const token = process.env.SLACK_TOKEN;


const rtm = new RtmClient(token, { logLevel: 'info' });
rtm.start();

rtm.on(RTM_EVENTS.MESSAGE, (message) => {
  const {channel} = message;
  if (message.text === 'random_student') {
    var text = students[Math.floor(Math.random() * students.length)];
    rtm.sendMessage(text, channel);
  }
});
