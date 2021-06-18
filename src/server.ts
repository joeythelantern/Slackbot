import SlackCron from './library/slackCron';
import SlackSocket from './library/slackSocket';

let socket = new SlackSocket('Bolt Socket');
let cron = new SlackCron('Cron');

socket.start();
cron.start();
