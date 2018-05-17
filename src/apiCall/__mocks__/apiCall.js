import mockData from './../../mockData/mockData';
const fetchRecentFilms = jest.fn().mockImplementation(() => Promise.resolve(mockData))
const addUserFetch = jest.fn().mockImplementation(() => Promise.resolve({
    name: "",
    email: "great",
    password: ""
}))

export {fetchRecentFilms, addUserFetch};

