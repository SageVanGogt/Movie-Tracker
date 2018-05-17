import CreateNewUser from "./CreateNewUser"
import React from 'react'
import {shallow} from 'enzyme'

describe('CreateNewUser', () => {
  let wrapper;
  beforeEach(() => {
    
    wrapper = shallow(<CreateNewUser />)
  });


    it('has a default state', () => {
      let expected = {
        name: "",
        email: "",
        password: ""
      }

      expect(wrapper.state()).toEqual(expected)
    })

    it('should match the snapshot', () => {

      expect(wrapper).toMatchSnapshot()
    })

    it('should update state on change', () => {
      let mockEvent = {
        target: {name: "email", value: "great"}
      }

      let expected = {
        name: "",
        email: "great",
        password: ""
      }
      wrapper.instance().handleChange(mockEvent)

      expect(wrapper.state()).toEqual(expected)

    })

});