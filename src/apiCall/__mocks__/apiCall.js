import mockData from './../../mockData/mockData';
const fetchFilmData = jest.fn().mockImplementation(() => Promise.resolve(mockData))
const addUserFetch = jest.fn().mockImplementation(() => Promise.resolve({
    name: "",
    email: "great",
    password: ""
}))

export {fetchFilmData, addUserFetch};

