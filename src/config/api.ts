import { WebClient } from '@slack/web-api'
import config from './config'

/** Initialize Slack APIs */
export const webAPI = new WebClient(config.slack.bot_token);

export default {
    webAPI
}