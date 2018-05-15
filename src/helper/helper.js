

const cleanFilmData = (filmData) => {
  const cleaned = filmData.map(film => {
    const url = `https://image.tmdb.org/t/p/w500${film.poster_path}`
    return {
      id: film.id,
      vote_average: film.vote_average,
      title: film.title,
      poster_path: url,
      overview: film.overview,
      release_date: film.release_date
    }
  })
  return cleaned;
}

export default cleanFilmData;