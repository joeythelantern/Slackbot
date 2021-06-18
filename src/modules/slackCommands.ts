import { AllMiddlewareArgs, SlackCommandMiddlewareArgs } from "@slack/bolt";
import logging from "../config/logging";
import SlackCron from "../library/slackCron";

export const helpCommand = async ({ command, ack, say }: SlackCommandMiddlewareArgs & AllMiddlewareArgs) => {
    logging.info(`Command '/help' triggered by ${command.user_name}`);

    let response = 'Here is a lite of the following commands available to you:\n';

    response += '/help -> displays this menu.'
    response += '/cron -> displays a list of current cron jobs being run by the bot.'

    await ack();
    await say(response);
}

export const cronsCommand = async ({ command, ack, say }: SlackCommandMiddlewareArgs & AllMiddlewareArgs) => {
    logging.info(`Command '/crons' triggered by ${command.user_name}`);

    await ack();
    await say(SlackCron.instance.describeJobs());
}