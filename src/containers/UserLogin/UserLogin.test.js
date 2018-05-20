import {UserLogin, mapDispatchToProps} from "./UserLogin";
import React from "react";
import { shallow } from "enzyme";
import { fetchUser } from "./../../apiCall/apiCall";


jest.mock('./../../apiCall/apiCall');

describe("UserLogin", () => {
  let wrapper;
  let mockHandleLogin;
  beforeEach(() => {
    mockHandleLogin= jest.fn()
    wrapper = shallow(<UserLogin handleLogin={mockHandleLogin} />);
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

  it('should reset state after handleSubmit', async () => {
    wrapper.setState({
      email: "dog",
      password: "catdog"
    })
    const expected = {
      email: "",
      password: ""
    }
    let mockEvent = {preventDefault: jest.fn()}    

    await wrapper.instance().handleSubmit(mockEvent);

    expect(wrapper.state()).toEqual(expected);
  })

  it('should calls fetchUser callback after adding user', async () => {
    let mockEvent = {preventDefault: jest.fn()}
    Promise.resolve(wrapper.instance().handleSubmit(mockEvent))
    
    expect(fetchUser).toHaveBeenCalledWith(wrapper.state());
  });

  describe('mapDispatchToProps', () => {
    let wrapper;
    let mockHandleSignIn;
    beforeEach(() => {
      mockHandleSignIn= jest.fn()
      wrapper = shallow(<UserLogin handleSignIn={mockHandleSignIn} />);
    });

    it('should call dispatch with the correct params', () => {
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
  });
});


