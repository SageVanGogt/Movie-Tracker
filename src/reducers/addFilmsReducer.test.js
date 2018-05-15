import addFilmsReducer from './addFilmsReducer';
import mockCleanData from './../mockData/mockCleanData';

describe('addFilmsReducer', () => {
  it('returns a state with an array of films when called with an ADD_RECENT action', () => {
    const initialState = [];
    const addRecentFilmsAction = {
        type: 'ADD_RECENT',
        films: mockCleanData
      }
    let newState = addFilmsReducer(initialState, addRecentFilmsAction);

    expect(newState).toEqual(addRecentFilmsAction.films);
  })
})