 const addFavoritesReducer = (state =[], action) => {
    switch (action.type) {
        case "ADD_FAVORITES":
            return action.favorites
        case "REMOVE_FAVORITE":
            const filtersFavorites = state.filter(favorite => {
                return favorite.movie_id !== action.movie_id;
            })
            return filtersFavorites;
        case 'ADD_ONE_FAVORITE':
            return [...state, action.favorite]
        case 'LOGOUT_USER':
            return [];
        default:
            return state
    }
}

export default addFavoritesReducer