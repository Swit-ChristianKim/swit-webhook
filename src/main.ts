import { WebHookClient } from "./web-hook-client";
// eslint-disable-next-line sort-imports
import * as core from "@actions/core";

async function run(): Promise<void> {
  try {
    const webHookUrl: string = core.getInput("WEBHOOK_URL");
    const message: string = core.getInput("MESSAGE");
    core.info(`webhook url - ${webHookUrl}`);
    core.info(`message - ${message}`);

    const wc = new WebHookClient(webHookUrl);
    const res = await wc.postChatMessageAndCreateTask(message);
    core.info(`API Result - ${res.data}`);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
