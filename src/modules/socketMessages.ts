import { GenericMessageEvent, SlackEventMiddlewareArgs } from "@slack/bolt";
import logging from "../config/logging";

export const helloMessage = async ({ message, say }: SlackEventMiddlewareArgs<"message">) => {
    logging.info(`Hello message event triggered at ${message.ts}`)
    let msg = message as GenericMessageEvent;
    await say(`Hey there <@${msg.user}>!  Hope your day is going well!`);
}