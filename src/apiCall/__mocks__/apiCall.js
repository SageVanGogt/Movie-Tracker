import mockData from './../../mockData/mockData';
const fetchRecentFilms = jest.fn().mockImplementation(() => Promise.resolve(mockData))
const addUserFetch = jest.fn().mockImplementation(() => Promise.resolve({
    name: "",
    email: "great",
    password: ""
}))
const fetchUser = jest.fn().mockImplementation(() => Promise.resolve({
    data:{
        "id": 1,
        "name": "Taylor",
        "password": "password",
        "email": "tman2272@aol.com"
    }
}))

export {fetchRecentFilms, addUserFetch, fetchUser};

