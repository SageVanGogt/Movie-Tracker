import updateStoreUserReducer from './updateStoreUserReducer';

describe('updateStoreUserReducer', () => {
  it('should returns state with a user object', () => {
    const mockUser = {
      "type": "ADD_USER",
      "id": 1,
      "name": "Taylor"
    };
    const mockState = {
        "id": 1,
        "name": "Taylor"   
    };
    const initialState = {};
    const actual = updateStoreUserReducer(initialState, mockUser);
    expect(actual).toEqual(mockState);
  })
})