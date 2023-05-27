import * as core from '@actions/core';

const run = async (): Promise<void> => {
  try {
    const name: string = core.getInput('name');
    const greeting = `Hello, ${name}`;
    core.debug(greeting); // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    core.setOutput('greeting', greeting);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
};

export default run;
