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

describe('updateStoreUser', () => {
  it('has a type of ADD_USER', () => {
    const mockUser = {
        "id": 1,
        "name": "Taylor",
        "password": "password",
        "email": "tman2272@aol.com"
    }
    const actual = actions.updateStoreUser(mockUser);

    expect(actual).toEqual({
      type: "ADD_USER",
      user_id: mockUser.id,
      name: mockUser.name
    })
  })

})

describe('logOutUser', () => {
  it('should return an object with type LOGOUT_USER', () => {
    const actual = actions.logOutUser();

    expect(actual).toEqual({
      type: 'LOGOUT_USER'
    });
  })

  describe('addFavoritesToStore', () => {
    it('should return an object with the type "ADD_FAVORITES', () => {
      const mockFavorites = [{}, {}]
      const actual = actions.addFavoritesToStore(mockFavorites)
      const expected = {
        type: "ADD_FAVORITES",
        favorites: [{}, {}]
      }


      expect(actual).toEqual(expected)
    });
  });

  describe('removeFavoriteFromStore', () => {
    it('Return an object with the type REMOVE_FAVORITE', () => {
      const mockFavorite = 666
      const actual = actions.removeFavoriteFromStore(mockFavorite)
      const expected = {
        type: 'REMOVE_FAVORITE',
        movie_id: mockFavorite
      }

      expect(actual).toEqual(expected);
      
    })
  })

  describe('addFavoriteToStore', () => {
    it('should return an object with type ADD_ONE_FAVORITE', () => {
      const mockFavorite = {
        movie_id: 10, 
      } 
      const expected = {
        type: 'ADD_ONE_FAVORITE',
        favorite: mockFavorite
      }
      const actual = actions.addFavoriteToStore(mockFavorite);
      expect(actual).toEqual(expected);
    })
  })

})