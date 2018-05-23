import React from 'react';
import {RecentMovies, mapStateToProps} from './RecentMovies';
import {shallow} from 'enzyme';

describe('RecentMovies', () => {
  it('should match the snapshot', ()=> {
    let mockProps = {
      films:[{movie_id:1}, {movie_id:2}, {movie_id:3}],
      user:{
        user_id:1
      }
    };
    let wrapper = shallow(<RecentMovies {...mockProps}/>);

    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should map the user to props', () => {
      const mockState = {
        user: {
          id: 1,
          name: 'Alan'
        },
        films: [{}, {}, {}]
      };

      const expected = {
        user: {
          id: 1,
          name: 'Alan'
        },
        films: [{}, {}, {}]
      };
      
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

});