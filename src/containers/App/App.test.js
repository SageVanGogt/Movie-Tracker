import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import mockCleanData from './../../mockData/mockCleanData';
import mockData from './../../mockData/mockData';
import {fetchRecentFilms} from './../../apiCall/apiCall';

jest.mock('./../../apiCall/apiCall');
describe('App', () => {
  let wrapper;

  beforeEach(() => {
    let mockHandlePageLoadFilms = jest.fn();
    wrapper = shallow(<App
      handlePageLoadFilms={mockHandlePageLoadFilms}
    />, { disableLifeCycleMethods: true });
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_RECENT',
        films: mockCleanData
      }
      mappedProps.handlePageLoadFilms(mockCleanData);

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



