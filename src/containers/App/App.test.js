import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import mockCleanData from './../../mockData/mockCleanData';
import mockData from './../../mockData/mockData';
import { fetchRecentFilms } from './../../apiCall/apiCall';

jest.mock('./../../apiCall/apiCall');
describe('App', () => {
  let wrapper;
  let mockHandlePageLoadFilms;
  let mockHandleError;
  let mockProps;
  
  beforeEach(() => {
    mockHandlePageLoadFilms = jest.fn();
    mockHandleError = jest.fn()
    mockProps = {
      error: ''
    }

    wrapper = shallow(<App
      handlePageLoadFilms={mockHandlePageLoadFilms}
      handleError={mockHandleError}
      {...mockProps}
    />, { disableLifeCycleMethods: true });
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('getRecentFilms should call fetchRecentFilms on pageload', async () => {
    await wrapper.instance().getRecentFilms();

    expect(fetchRecentFilms).toHaveBeenCalled()
  })

  it.skip('getRecentFilms should call cleanFilmData on with fetchedFilms', async () => {
    let cleanFilmData = jest.fn()
    await wrapper.instance().getRecentFilms();

    expect(cleanFilmData).toHaveBeenCalledWith()
  })

  it('should call handlePageLoadFilms with the correct params', async () => {
    await wrapper.instance().getRecentFilms()

    expect(mockHandlePageLoadFilms).toHaveBeenCalledWith(mockCleanData)
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

    it('should call dispatch on handleError with the correct params', () => {
      const mockDispatch = jest.fn()
      const mappedProps = mapDispatchToProps(mockDispatch)
      const mockAction = {
        type: "ADD_ERROR",
        message: "Sign in to add favorites"
      }
      const mockError = "Sign in to add favorites";

      mappedProps.handleError(mockError)

      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    });
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



