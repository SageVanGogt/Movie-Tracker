import React from 'react';
import { Nav, mapDispatchToProps, mapStateToProps } from './Nav';
import {shallow} from 'enzyme'

describe('Nav', () => {

  it('should match the snapshot', () => {
    let mockProps = {
      user:{
        user_id:1
      }
    }
    let wrapper = shallow(<Nav {...mockProps} />)

    expect(wrapper).toMatchSnapshot()
  })

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