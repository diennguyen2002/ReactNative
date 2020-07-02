function filterModeReducer(state = 'Show_All', action) {
  if (action.type === 'SELECT_FILTER') {
    return action.mode;
  }
  return state;
}

export default filterModeReducer;
