 const addFavoritesReducer = (state =[], action) => {
    switch (action.type) {
        case "ADD_FAVORITES":
            return action.favorites
    
        default:
        return state
    }
}

export default addFavoritesReducer