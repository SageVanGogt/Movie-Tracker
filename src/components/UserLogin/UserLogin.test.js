import UserLogin from "./UserLogin";
import React from "react";
import { shallow } from "enzyme";
import { fetchUser } from "./../../apiCall/apiCall";

jest.mock('./../../apiCall/apiCall');

describe("UserLogin", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UserLogin />);
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
});
