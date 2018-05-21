import { CreateNewUser, mapDispatchToProps } from "./CreateNewUser";
import React from "react";
import { shallow } from "enzyme";
import { addUserFetch } from "./../../apiCall/apiCall";

jest.mock('./../../apiCall/apiCall');

describe("CreateNewUser", () => {
  let wrapper;
  let mockHandleSignup;

  beforeEach(() => {
    mockHandleSignup = jest.fn()
    wrapper = shallow(<CreateNewUser 
      handleSignup={mockHandleSignup}
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

  it('should calls addUserFetch callback after adding user', async () => {
    let mockEvent = {preventDefault: jest.fn()};
    Promise.resolve(wrapper.instance().handleSubmit(mockEvent));
    
    expect(addUserFetch).toHaveBeenCalledWith(wrapper.state());  
  });

  it('should call handleSignup with the correct params', async () => {
    const mockUser = {
      "id": 1,
      "name": ""
    }
    let mockEvent = {preventDefault: jest.fn()};  

    await wrapper.instance().handleSubmit(mockEvent)

    expect(mockHandleSignup).toHaveBeenCalledWith(mockUser)
  })

  describe('mapDispatchtoProps', () => {
    it('should be called with the correct params', () => {
      const mockDispatch = jest.fn()
      const mappedProps = mapDispatchToProps(mockDispatch)
      const mockAction = {
        type: "ADD_USER",
        user_id: 1,
        name: "doc",  
      }

      const mockUser = {
        id: 1,
        name: 'doc'
      }

      mappedProps.handleSignup(mockUser)

      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    });
  });
});
