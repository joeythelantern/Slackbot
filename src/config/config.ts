const SLACK_APP_TOKEN = process.env.SLACK_APP_TOKEN || '';
const SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET || '';
const SLACK_TOKEN = process.env.SLACK_TOKEN || '';

const config = {
    slack: {
        app_token: SLACK_APP_TOKEN,
        bot_token: SLACK_TOKEN,
        signing_secret: SLACK_SIGNING_SECRET,
        token: SLACK_TOKEN
    }
}

export default config;