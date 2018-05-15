import * as actions from './index';
import mockCleanData from './../mockData/mockCleanData';

describe('addRecentFilms', () => {
  it('has a type of ADD_RECENT', () => {
    //setup
    let filmData = mockCleanData;
    //execution
    let actual = actions.addRecentFilms(filmData);
    //assertion
    expect(actual[0]).toEqual({
      type: 'ADD_RECENT',
      ...filmData[0]
    });
  })
})