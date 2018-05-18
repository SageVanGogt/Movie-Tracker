import React from 'react'
import {shallow} from 'enzyme'
import Card from "./Card"

describe('Card', () => {
  it('should match the snapshot', () => {
    let mockProps = {
        id: 1,
        vote_average: 34,
        title: "Fury",
        poster_path: "www.theworstmovieever.com",
        overview: "a bunch of text about how bad this move is",
        release_date: 2014
      }
    let wrapper = shallow(<Card {...mockProps}/>)
  
    expect(wrapper).toMatchSnapshot()
  })
});