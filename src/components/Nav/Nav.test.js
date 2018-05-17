import React from 'react';
import { Nav, mapDispatchToProps } from './Nav';


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
})