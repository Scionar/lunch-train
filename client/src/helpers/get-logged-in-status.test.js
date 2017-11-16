import getLoggedInStatus from './get-logged-in-status';

describe('getLoggedInStatus', () => {
  const loggedOutTestState = {
    user: null
  };

  const loggedInTestState = {
    user: { name: 'test user' }
  };

  it('returns true when logged in', () => {
    const result = getLoggedInStatus(loggedInTestState);
    expect(result).toBe(true);
  });

  it('returns false when not logged in', () => {
    const result = getLoggedInStatus(loggedOutTestState);
    expect(result).toBe(false);
  });
});
