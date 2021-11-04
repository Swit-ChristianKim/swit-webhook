import { WebHookClient } from "./web-hook-client";
import core from "@actions/core";

async function run(): Promise<void> {
  try {
    const webHookUrl: string = core.getInput("WEBHOOK_URL");
    const message: string = core.getInput("MESSAGE");
    core.setOutput("webhook url - ", `${webHookUrl}`);
    core.setOutput("message - ", `${message}`);

    const wc = new WebHookClient(webHookUrl);
    const res = await wc.postChatMessageAndCreateTask(message);
    core.setOutput("API", res.data);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
