import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps, Card } from './Card';

describe('Card', () => {
  it('should match the snapshot', () => {
    let mockProps = {
        film_id: 1,
        vote_average: 34,
        title: "Fury",
        poster_path: "www.theworstmovieever.com",
        overview: "a bunch of text about how bad this move is",
        release_date: 2014
      }
    let wrapper = shallow(<Card {...mockProps}/>)
  
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should pull the correct props from the store', () => {
      let mockState = {
        user: {id: 1, name: 'lisa'},
        films: []
      }
      let mappedProps = mapStateToProps(mockState);
      let expected = {user: {id: 1, name: 'lisa'}};

      expect(mappedProps).toEqual(expected);
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch)
      const mockAction = {type: 'REMOVE_FAVORITE', movie_id: 45}
      const mockArg = 45

      mappedProps.handleRemoveFavorite(mockArg)

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    })
  })
});