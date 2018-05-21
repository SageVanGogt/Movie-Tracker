import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps, Card } from './Card';
import { removeFavorite, postFavoriteToDb } from './../../apiCall/apiCall'

jest.mock('./../../apiCall/apiCall')

describe('Card', () => {
  let wrapper;
  let mockProps;
  let mockHandleRemoveFavorite;
  let mockHandleAddFavorite;

  beforeEach(() => {
    mockHandleRemoveFavorite = jest.fn()
    mockHandleAddFavorite = jest.fn()
    mockProps = {
      movie_id: 1,
      vote_average: 34,
      title: "Fury",
      poster_path: "www.theworstmovieever.com",
      overview: "a bunch of text about how bad this move is",
      release_date: 2014,
      user: {
        user_id: 1
      },
      favorites:[{movie_id:1},{},{}]
    }

    wrapper = shallow(<Card 
      {...mockProps}
      handleAddFavorite={mockHandleAddFavorite}
      handleRemoveFavorite={mockHandleRemoveFavorite}
    />)
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('conditionally rendered button handleDeleteClick', () => {
    beforeEach(() => {
      wrapper.find('.delete-button').simulate('click')
    });
    
    it('should call removeFavorite with correct params when a movie is favorited', () => {
      const mockParams = {
        user_id: 1,
        movie_id: 1
      }
      expect(removeFavorite).toHaveBeenCalledWith(mockParams)
    })

    it('should call handleRemoveFavorite with the correct params', () => {
      const mockParams = {
        movie_id: 1
      }

      expect(mockHandleRemoveFavorite).toHaveBeenCalledWith(mockParams.movie_id)
    })
  });

  describe('conditionally rendered button handleFavoriteClick', () => {
    let mockProps;
    let wrapper;
    let mockHandleRemoveFavorite;
    let mockHandleAddFavorite;

    beforeEach(() => {
      mockHandleRemoveFavorite = jest.fn()
      mockHandleAddFavorite = jest.fn()
      mockProps = {
        movie_id: 1,
        vote_average: 34,
        title: "Fury",
        poster_path: "www.theworstmovieever.com",
        overview: "a bunch of text about how bad this move is",
        release_date: 2014,
        user: {
          user_id: 1
        },
        favorites:[{},{},{}],
        handleAddFavorite: mockHandleAddFavorite,
        handleRemoveFavorite: mockHandleRemoveFavorite
      }
      wrapper = shallow(<Card       
        {...mockProps}
      />)
     
      wrapper.find('.favorite-button').simulate('click')
    });
    
    it('should call postFavoriteToDb with the correct params', () => {
      const mockParams = {
        movie_id: 1,
        user_id: 1
      }
      expect(postFavoriteToDb).toHaveBeenCalledWith(mockProps, mockProps.user)
    })

    it('should call handleAddFavorite with the correct params', () => {
      
      expect(mockHandleAddFavorite).toHaveBeenCalledWith(mockProps)
    })
  });

  describe('mapStateToProps', () => {
    it('should pull the correct props from the store', () => {
      let mockState = {
        user: {id: 1, name: 'lisa'},
        films: [],
        favorites: [{}, {}]
      }
      let mappedProps = mapStateToProps(mockState);
      let expected = {
        user: {
          id: 1, 
          name: 'lisa'
        },
        favorites: [{}, {}]
      };

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

    it('should call dispatch on handleAddFavorite with the correct params', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch)
      const mockAction = {type: 'ADD_ONE_FAVORITE', favorite: {}}
      const mockArg = {}

      mappedProps.handleAddFavorite(mockArg)

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    })
  })
});