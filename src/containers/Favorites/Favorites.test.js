import React from 'react';
import { Favorites, mapStateToProps, mapDispatchToProps } from './Favorites';
import { shallow } from 'enzyme';

describe('Favorites', () => {
  describe('mapStateToProps', () => {
    it('should map user to props', () => {
      const mockState = {
        user: {   
          user_id: 1,
          name: 'Sup Dude'
        },
        films: [],
        favorites: [{},{}]
      }
      const expected = {
        user: {
        user_id: 1,
        name: 'Sup Dude'
        }, 
        favorites: [{},{}]
      }
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    })
  })

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn()
    const mappedProps = mapDispatchToProps(mockDispatch)
    const mockAction = {
      type: "ADD_FAVORITES",
      favorites: [{}, {}]
    }
    const mockFavorites = [{},{}]

    mappedProps.populateFavorites(mockFavorites)

    expect(mockDispatch).toHaveBeenCalledWith(mockAction)
  });
})