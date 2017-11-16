export const logoutAction = () => ({
  type: 'LOG_OUT'
});

export const logoutReducer = (state, action) => {
  return {
    ...state,
    user: null
  };
};

export default logoutAction;
