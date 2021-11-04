import { WebHookClient } from "./client";
import core from "@actions/core";

async function run(): Promise<void> {
  try {
    // const ms: string = core.getInput("milliseconds");
    // core.debug(`Waiting ${ms} milliseconds ...`); // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    // core.debug(new Date().toTimeString());
    // await wait(parseInt(ms, 10));
    // core.debug(new Date().toTimeString());

    const wc = new WebHookClient("https://hook.swit.io/chat/200416040053387SNqV/WijoE7a0jj7YTeK8U9u7");
    const res = await wc.postChatMessage("TEST1111");
  
    core.setOutput("time", res);
  } catch (error) {
    
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
