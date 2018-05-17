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

});