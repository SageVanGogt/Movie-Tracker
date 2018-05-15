const addFilmsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_RECENT': 
    return action.films;
    default: 
    return state;
  }
}

export default addFilmsReducer;