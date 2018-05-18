import React from 'react'
import {RecentMovies, mapStateToProps} from './RecentMovies'
import {shallow} from 'enzyme'

describe('RecentMovies', () => {
  it('should match the snapshot', ()=> {

  })

  describe('mapStateToProps', () => {
    it('should map the user to props', () => {
      const mockState = {
        user: {
          id: 1,
          name: 'Alan',
          },
        films: [{}, {}, {}]
      }

      const expected = {
        user: {
          id: 1,
          name: 'Alan',
        },
        films: [{}, {}, {}]
      }
      
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

});