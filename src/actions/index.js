const addRecentFilms = (allFilms) => {
  const filmsWithType = allFilms.map(film => {
    return {
      type: 'ADD_RECENT', 
      ...film
    }
  })
  return filmsWithType;
}

export {
  addRecentFilms
}