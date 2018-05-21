import mockData from './../../mockData/mockData';
const fetchRecentFilms = jest.fn().mockImplementation(() => Promise.resolve(mockData))
const addUserFetch = jest.fn().mockImplementation(() => Promise.resolve({
    "id": 1,
}))
const fetchUser = jest.fn().mockImplementation(() => Promise.resolve({
    data:{
        "id": 1,
        "name": "Taylor",
        "password": "password",
        "email": "tman2272@aol.com"
    }
}))
const getUserFavorites = jest.fn().mockImplementation(() => Promise.resolve({
    data: [
        {
            "id":15,
            "movie_id":49017,
            "user_id":10,
            "title":"Dracula Untold",
            "poster_path":"https://image.tmdb.org/t/p/w500/4oy4e0DP6LRwRszfx8NY8EYBj8V.jpg",
            "release_date":"2014-10-01",
            "vote_average":"6.2",
            "overview":"Vlad Tepes is a great hero, but when he learns the Sultan is preparing for battle and needs to form an army of 1,000 boys, including Vlad's son, he vows to find a way to protect his family. Vlad turns to dark forces in order to get the power to destroy his enemies and agrees to go from hero to monster as he's turned into the mythological vampire Dracula."
        }
    ]
}))

export {fetchRecentFilms, addUserFetch, fetchUser, getUserFavorites };

