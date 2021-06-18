import { CronJob } from "cron";
import cronstrue from 'cronstrue';
import logging from "../config/logging";

class CronJobObject {
    name: string;
    cron: string;
    job: CronJob;

    constructor(name: string, cron: string, func: () => void) {
        this.name = name;
        this.cron = cron;
        this.job = new CronJob(cron, () => { logging.info(`${this.name} >>>`); func(); }, null, true);
    }

    public start = () => this.job.start();

    public toString = () => `${this.name} running -> ${cronstrue.toString(this.cron)}`;
}

export default CronJobObject;