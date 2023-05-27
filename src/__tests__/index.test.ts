import * as run from '../run';

jest.mock('../run');

it('should run the action once', () => {
  require('../');
  expect(run.default).toHaveBeenCalledTimes(1);
});
