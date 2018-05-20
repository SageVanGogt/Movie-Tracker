import React from 'react';
import { Nav, mapDispatchToProps, mapStateToProps } from './Nav';


describe('Nav', () => {
  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch)
      const mockAction = {
        type: "LOGOUT_USER"
      }
      mappedProps.handleLogout()

      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
  })
  describe('mapStateToProps', () => {
    it('should map the user to props', () => {
      const mockState = {
        user: {
          id: 1,
          name: 'Alan',
          },
        films: []
      }

      const expected = {
        user: {
          id: 1,
          name: 'Alan',
        }
      }
      
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
})