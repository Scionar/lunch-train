export const loginAction = user => ({
  type: 'LOG_IN',
  user: user
});

export const loginReducer = (state, action) => {
  return {
    ...state,
    user: action.user
  };
};
