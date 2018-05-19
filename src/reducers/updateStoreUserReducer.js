const updateStoreUserReducer = (state = {}, user) => {
  switch(user.type) {
    case 'ADD_USER': 
      return {user_id: user.user_id, name: user.name};
    case 'LOGOUT_USER':
      return {};
    default:
      return state;
  }
}

export default updateStoreUserReducer;