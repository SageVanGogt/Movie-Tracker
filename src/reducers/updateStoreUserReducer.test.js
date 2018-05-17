import updateStoreUserReducer from './updateStoreUserReducer';

describe('updateStoreUserReducer', () => {
  it('should returns state with a user object', () => {
    const mockAction = {
      "type": "ADD_USER",
      "id": 1,
      "name": "Taylor"
    };
    const mockState = {
        "id": 1,
        "name": "Taylor"   
    };
    const initialState = {};
    const actual = updateStoreUserReducer(initialState, mockAction);
    expect(actual).toEqual(mockState);
  })

  it('should return an empty object when logOutUser is called', () => {
    const mockAction = {
      type: "LOGOUT_USER"
    }
    const initialState = {
      "id": 1,
      "name": "Taylor"
    };
    const mockState = {}
    const actual = updateStoreUserReducer(initialState, mockAction);

    expect(actual).toEqual(mockState);
  })
})