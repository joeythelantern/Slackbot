import SlackBase from './slackBase';
import CronJobObject from './cronJobObject';
import logging from '../config/logging';

class SlackCron extends SlackBase {
    cronJobs: CronJobObject[];
    static instance: SlackCron;

    constructor(name: string) {
        super(name);
        SlackCron.instance = this;
        this.cronJobs = [];
        this.define();
    }

    protected define = () => {
        /** Basic bot */
        this.cronJobs.push(new CronJobObject('Bot Healthcheck', '*/60 * * * * * ', () => logging.info('The bot is running properly.')));
    }

    public start = () => this.cronJobs.forEach(job => job.start());

    public describeJobs = () => {
        let response = 'Here is a list of cron jobs currently being monitored:\n';
        this.cronJobs.forEach(job => response += job.toString() + '\n');
        return response;
    };
}

export default SlackCron;