import * as actions from './index';
import mockCleanData from './../mockData/mockCleanData';

describe('addRecentFilms', () => {
  it('has a type of ADD_RECENT', () => {
    //setup
    let filmData = mockCleanData;
    //execution
    let actual = actions.addRecentFilms(filmData);
    //assertion
    expect(actual).toEqual({
      type: 'ADD_RECENT',
      films: filmData
    });
  })
})

describe('addUserToStore', () => {
  it('has a type of ADD_USER', () => {
    const mockUser = {
        "id": 1,
        "name": "Taylor",
        "password": "password",
        "email": "tman2272@aol.com"
    }
    const actual = actions.addUserToStore(mockUser);

    expect(actual).toEqual({
      type: "ADD_USER",
      ...mockUser
    })
  })
})