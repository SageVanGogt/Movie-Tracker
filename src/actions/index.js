const addRecentFilms = (allFilms) => {
  return {
    type: 'ADD_RECENT', 
    films: allFilms
  }
}

const updateStoreUser = (user) => {
  return {
    type: "ADD_USER",
    id: user.id,
    name: user.name
  }
}

export {
  addRecentFilms,
  updateStoreUser
}