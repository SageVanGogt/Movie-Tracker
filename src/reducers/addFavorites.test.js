import  addFavoritesReducer  from "./addFavoritesReducer"

describe('addFavoritesReducer', () => {
  it('should return a state of newFavorites', () => {
    const mockInitialState = []
    const mockAction = {
        type:"ADD_FAVORITES",
        favorites:[{},{}]
    }
    const mockState = [{},{}]
    
    const actual = addFavoritesReducer(mockInitialState, mockAction)

    expect(actual).toEqual(mockState)
  });
});