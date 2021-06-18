import { App } from '@slack/bolt';
import config from '../config/config';
import logging from '../config/logging';
import { sendMessageToChannel } from '../modules/messaging';
import { cronsCommand, helpCommand } from '../modules/slackCommands';
import { helloMessage } from '../modules/socketMessages';
import SlackBase from './slackBase';

class SlackSocket extends SlackBase {
    boltApp: App;
    static instance: SlackSocket;

    constructor(name: string) {
        super(name);
        SlackSocket.instance = this;

        this.boltApp = new App({
            appToken: config.slack.app_token,
            signingSecret: config.slack.signing_secret,
            token: config.slack.token,
            socketMode: true
        });

        this.define();
    }

    protected define = (): void => {
        /** Define Commands */
        this.boltApp.command('/help', helpCommand);
        this.boltApp.command('/crons', cronsCommand);

        /** Define Messages */
        this.boltApp.message(/^hello/, helloMessage);
    };

    public start = async () => {
        try 
        {
            await this.boltApp.start(1338);
            logging.info('⚡️ Bolt app is running!');
            sendMessageToChannel('general', '⚡️ SCBA Bot activated.');
        } 
        catch (error) 
        {
            process.exitCode = 1;
            logging.error(error);
            throw new Error (error);
        }
    };
}

export default SlackSocket;
