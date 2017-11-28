export const updateTrainsAction = trains => ({
  type: 'UPDATE_TRAINS',
  trains
});

export const updateTrainsReducer = (state, action) => {
  return {
    ...state,
    trains: action.trains
  };
};
