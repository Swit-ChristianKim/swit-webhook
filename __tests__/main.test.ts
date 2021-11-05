import * as process from "process";
import * as cp from "child_process";
import * as path from "path";
import { test } from "@jest/globals";
import * as dotenv from "dotenv";

// load the.env file
// env variables : INPUT_WEBHOOK_URL, INPUT_MESSAGE
dotenv.config();

// run test
test('test runs', () => {

  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
})
