import * as process from "process";
import * as cp from "child_process";
import * as path from "path";
import { test } from "@jest/globals";


// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['WEBHOOK_URL'] = 'https://hook.swit.io/chat/200416040053387SNqV/WijoE7a0jj7YTeK8U9u7'
  process.env['MESSAGE'] = new Date().toString() + 'TEST';
  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
})
