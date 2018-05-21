import React from 'react';
import { Favorites, mapStateToProps } from './Favorites';
import { shallow } from 'enzyme';

describe('Favorites', () => {

  it('should match the snapshot', () => {
    let mockProps = {
      favorites: [{movie_id:1}, {movie_id:2}, {movie_id:3}]
    }
    let wrapper = shallow(<Favorites {...mockProps}/>)
  })

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
        favorites: [{},{}]
      }
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    })
  })
})