import { CreateNewUser, mapDispatchToProps } from "./CreateNewUser";
import React from "react";
import { shallow } from "enzyme";
import { addUserFetch, validateEmail } from "./../../apiCall/apiCall";

jest.mock('./../../apiCall/apiCall');

describe("CreateNewUser", () => {
  let wrapper;
  let mockHandleSignup;
  let mockHandleError;

  beforeEach(() => {
    mockHandleSignup = jest.fn();
    mockHandleError = jest.fn();
    wrapper = shallow(<CreateNewUser 
      handleSignup={mockHandleSignup}
      handleError={mockHandleError}
    />);
  });

  it("has a default state", () => {
    let expected = {
      name: "",
      email: "",
      password: ""
    };

    expect(wrapper.state()).toEqual(expected);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it("should update state on change", () => {
      let mockEvent = {
        target: { name: "email", value: "great" }
      };
      let expected = {
        name: "",
        email: "great",
        password: ""
      };
  
      wrapper.instance().handleChange(mockEvent);
  
      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe('handleSubmit', () => {
    it('should calls addUserFetch callback after adding user', async () => {
      Promise.resolve(wrapper.instance().handleSubmit());
      
      expect(addUserFetch).toHaveBeenCalledWith(wrapper.state());  
    });
  
    it('should call handleSignup with the correct params', async () => {
      const mockUser = {
        "id": 1,
        "name": ""
      };
  
      await wrapper.instance().handleSubmit();
  
      expect(mockHandleSignup).toHaveBeenCalledWith(mockUser);
    });
  });

  describe('mapDispatchtoProps', () => {
    it('should be called with the correct params', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: "ADD_USER",
        user_id: 1,
        name: "doc"  
      };

      const mockUser = {
        id: 1,
        name: 'doc'
      };

      mappedProps.handleSignup(mockUser);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('should call dispatch on handleError with the correct params', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: "ADD_ERROR",
        message: "Email already in use"
      };
      const mockError = "Email already in use";

      mappedProps.handleError(mockError);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });

  describe('checkValidEmail', () => {
    let mockEvent;
    let mockState;
    beforeEach(() => {
      mockEvent = {
        preventDefault: jest.fn()
      };
      mockState = 'thurmanvogt@gmail.com';
      wrapper.setState({email: mockState});
    });

    it('should call validateEmail with the correct props', () => {
      wrapper.instance().checkValidEmail(mockEvent);      
      expect(validateEmail).toHaveBeenCalledWith(mockState);
    });

    it.skip('should call handleSubmit if actual.isValid is true', () => {
      const spy = jest.spyOn(CreateNewUser, 'handleSubmit');
      wrapper.instance().checkValidEmail(mockEvent);
      expect(spy).toHaveBeenCalled();
    });
  });
});
