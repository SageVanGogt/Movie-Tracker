import mockData from './../../mockData/mockData';
const fetchFilmData = jest.fn().mockImplementation(() => Promise.resolve(mockData))

export default fetchFilmData;

