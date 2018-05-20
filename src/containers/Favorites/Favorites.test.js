import React from 'react';
import { Favorites, mapStateToProps } from './Favorites';
import { shallow } from 'enzyme';

describe('Favorites', () => {
  describe('mapStateToProps', () => {
    it('should map user to props', () => {
      const mockState = {
        user: {
          user_id: 1,
          name: 'Sup Dude'
        },
        films: []
      }
      const expected = {
        user: {
        user_id: 1,
        name: 'Sup Dude'
      }}
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    })
  })
})