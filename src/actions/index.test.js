import * as actions from './index';
import mockCleanData from './../mockData/mockCleanData';

describe('addRecentFilms', () => {
  it('has a type of ADD_RECENT', () => {
    const filmData = mockCleanData;
    const actual = actions.addRecentFilms(filmData);
    
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
      id: mockUser.id,
      name: mockUser.name
    })
  })
})