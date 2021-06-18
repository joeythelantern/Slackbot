import { App } from '@slack/bolt';
import config from '../config/config';

class SlackSocket extends SlackBase {
    boltApp: App;

    constructor() {
        super();

        this.boltApp = new App({
            appToken: config.slack.app_token,
            signingSecret: config.slack.signing_secret,
            token: config.slack.token,
            socketMode: true
        });

        this.define();
    }

    protected define = () => {};

    public start = () => {};
}

export default SlackSocket;
