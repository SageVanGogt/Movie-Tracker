const addRecentFilms = (allFilms) => {
  return {
    type: 'ADD_RECENT', 
    films: allFilms
  }
}

const updateStoreUser = (user) => {
  return {
    type: "ADD_USER",
    user_id: user.id,
    name: user.name
  }
}

const logOutUser = () => {
  return {
    type: "LOGOUT_USER"
  }
}

const addFavoritesToStore = (movies) => {
  return {
    type: "ADD_FAVORITES",
    favorites: movies
  }
}

const removeFavoriteFromStore = (movieId) => {
  return {
    type: "REMOVE_FAVORITE",
    movie_id: movieId
  }
}

const addFavoriteToStore = (favorite) => {
  return {
    type: 'ADD_ONE_FAVORITE',
    ...favorite
  }
}

export {
  addRecentFilms,
  updateStoreUser,
  logOutUser,
  addFavoritesToStore,
  removeFavoriteFromStore,
  addFavoriteToStore
}

