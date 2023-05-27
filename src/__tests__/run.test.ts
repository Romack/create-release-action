import run from '../run';
import * as core from '@actions/core';
import { when } from 'jest-when';

describe('hello-world-action', () => {
  it('outputs the greeting', async () => {
    when(core.getInput).calledWith('name').mockReturnValue('World');

    await run();

    expect(core.setOutput).toBeCalledWith('greeting', 'Hello, World');
  });

  it('should provide an error message when an exception is encountered', async () => {
    const errorMessage = 'A weird exception was encountered!';
    when(core.getInput)
      .calledWith('name')
      .mockImplementationOnce(() => {
        throw new Error(errorMessage);
      });

    await run();

    expect(core.setFailed).toHaveBeenCalledWith(errorMessage);
  });
});
