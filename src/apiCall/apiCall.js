import key from './apiKey';

const fetchRecentFilms = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`;
  try{
    const response = await fetch(url);
    const filmData = await response.json();
    return filmData;
  } catch(err){
    const error = 'Failed to fetch data'
    throw error;
  }
}

export default fetchRecentFilms;