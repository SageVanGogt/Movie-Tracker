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

const addUserFetch = async (user) => {
  const url = "http://localhost:3000/api/users/new"
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"}
    })
    const userData = await response.json();
    return userData;
  } catch(err){
    const error = 'Failed to fetch data'
    throw error;
  }
}

const fetchUser = async (user) => {
  const email = user.email.toLowerCase();
  const  userBody = {
    method: 'POST',
    body: JSON.stringify({ email, password: user.password }),
    headers: {"Content-Type": "application/json"}
  }
  const url = 'http://localhost:3000/api/users';
  try {
    const response = await fetch(url, userBody)
    const userData = await response.json();
    return userData;
  } catch (err) {
    const error = 'Failed to fetch data'
    throw error;
  }
}

const postFavoriteToDb = async (favoriteInfo, user) => {
  const url = "http://localhost:3000/api/users/favorites/new";
  const postData = {
    method: 'POST',
    body: JSON.stringify({user_id: user.user_id, ...favoriteInfo}),
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json"
    }
  }
  try {
    await fetch(url, postData);
  } catch(err) {
    const error = "Failed to post favorite";
    throw error;
  }
}

const getUserFavorites = async (userId) => {
  const url = `http://localhost:3000/api/users/${userId}/favorites`;
  try{
  const response = await fetch(url);
  const favorites = await response.json();
  return favorites;
  } catch(err) {
    const error = "Failed to get favorites";
    throw error;
  }
}

const removeFavorite = async (favorite) => {
  debugger
  const url = `http://localhost:3000/api/users/${favorite.user_id}/favorites/${favorite.movie_id}`
  try{
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        },
      body: JSON.stringify(favorite)

    })
    const data = await response.json();
  } catch(err) {
    const error = "Failed to remove favorite";
    throw error;
  }
}


export {
  fetchRecentFilms, 
  addUserFetch, 
  fetchUser,
  postFavoriteToDb,
  getUserFavorites,
  removeFavorite
};