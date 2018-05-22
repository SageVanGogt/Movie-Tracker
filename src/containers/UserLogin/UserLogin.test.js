import {UserLogin, mapDispatchToProps} from "./UserLogin";
import React from "react";
import { shallow } from "enzyme";
import { fetchUser, getUserFavorites } from "./../../apiCall/apiCall";


jest.mock('./../../apiCall/apiCall');

describe("UserLogin", () => {
  let wrapper;
  let mockHandleLogin;
  let mockPopulateFavorites;
  beforeEach(() => {
    mockPopulateFavorites = jest.fn();
    mockHandleLogin= jest.fn();
    wrapper = shallow(<UserLogin 
      handleLogin={mockHandleLogin} 
      populateFavorites={mockPopulateFavorites}
      />);
  });

  it("has a default state", () => {
    let expected = {
      email: "",
      password: ""
    };

    expect(wrapper.state()).toEqual(expected);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should update state on change", () => {
    let mockEvent = {
      target: { name: "email", value: "great" }
    };
    let expected = {
      email: "great",
      password: ""
    };

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state()).toEqual(expected);
  });

  it('should calls fetchUser callback after adding user', async () => {
    let mockEvent = {preventDefault: jest.fn()}
    Promise.resolve(wrapper.instance().handleSubmit(mockEvent))
    
    expect(fetchUser).toHaveBeenCalledWith(wrapper.state());
  });

  describe('mapDispatchToProps', () => {
    let wrapper;
    let mockHandleSignIn;
    let mockPopulateFavorites;
    beforeEach(() => {
      mockPopulateFavorites = jest.fn();
      mockHandleSignIn= jest.fn();
      wrapper = shallow(<UserLogin 
        handleSignIn={mockHandleSignIn} 
        populateFavorites={mockPopulateFavorites}
      />);
    });

    it('should call dispatch on handleLogin with the correct params', () => {
      const mockDispatch = jest.fn()
      const mappedProps = mapDispatchToProps(mockDispatch)
      const mockUser = {
       id: 1,
       name: "Doc"
      }
      const mockAction = {
        type: 'ADD_USER',
        user_id: 1,
        name: "Doc"
      }

      mappedProps.handleLogin(mockUser)

      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })

    it('should call dispatch on populateFavorites with the correct params', () => {
      const mockDispatch = jest.fn()
      const mappedProps = mapDispatchToProps(mockDispatch)
      const mockAction = {
        type: "ADD_FAVORITES",
        favorites: [{}, {}]
      }
      const mockFavorites = [{},{}]
  
      mappedProps.populateFavorites(mockFavorites)
  
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    });

     it('should call dispatch on handleError with the correct params', () => {
       const mockDispatch = jest.fn()
       const mappedProps = mapDispatchToProps(mockDispatch)
       const mockAction = {
         type: "ADD_ERROR",
         message: "Password does not match email"
       }
       const mockError = "Password does not match email";

       mappedProps.handleError(mockError)

       expect(mockDispatch).toHaveBeenCalledWith(mockAction)
     });
  });


});


