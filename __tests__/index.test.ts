import dotenv from 'dotenv';

// load the.env file
// env variables : INPUT_WEBHOOK_URL, INPUT_MESSAGE
dotenv.config();

// run test
import * as main from '../src/main'

// Mock the action's entrypoint
const runMock = jest.spyOn(main, 'run').mockImplementation()

describe('index', () => {
  it('calls run when imported', async () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('../src/index')

    expect(runMock).toHaveBeenCalled();
  })
})