import mockData from '../mockData/mockData';
import mockCleanData from '../mockData/mockCleanData';
import cleanFilmData from './helper';

describe('Helper', () => {
  it('cleanFilmData should return an array of cleaned objects', () => {
    
    const expectation = mockCleanData;

    const result = cleanFilmData(mockData.results);  

    expect(result).toEqual(expectation);
  });
});