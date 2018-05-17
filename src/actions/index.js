const addRecentFilms = (allFilms) => {
  return {
    type: 'ADD_RECENT', 
    films: allFilms
  }
}

const addUserToStore = (user) => {
  return {
    type: "ADD_USER",
    ...user
  }
}

export {
  addRecentFilms,
  addUserToStore
}