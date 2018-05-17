const updateStoreUserReducer = (state = {}, user) => {
  switch(user.type) {
    case 'ADD_USER': 
    return {id: user.id, name: user.name};
    default:
    return state;
  }
}

export default updateStoreUserReducer;