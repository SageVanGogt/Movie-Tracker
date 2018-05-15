import mockData from '../mockData/mockData';
import mockCleanData from '../mockData/mockCleanData';
import cleanFilmData from './helper';

describe('Helper', () => {
 it('cleanFilmData should return an array of cleaned objects', () => {
  //setup
  const expectation = mockCleanData

  
  //execution
   const result = cleanFilmData(mockData.results);  
  
   //expectation
  expect(result).toEqual(expectation);
 });
});