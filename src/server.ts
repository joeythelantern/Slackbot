import SlackCron from './library/slackCron';
import SlackSocket from './library/slackSocket';

let socket = new SlackSocket();
let cron = new SlackCron();

socket.start();
cron.start();
