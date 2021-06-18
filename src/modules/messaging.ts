import { webAPI } from "../config/api";
import logging from "../config/logging";

export const sendMessageToChannel = async (channel: string, text: string) => {
    try 
    {
        const result = await webAPI.chat.postMessage({ text, channel });

        logging.info(`Message ${result.ts} sent to ${channel}: ${text} `);
    } 
    catch (error) 
    {
        throw new Error (error)
    }
}