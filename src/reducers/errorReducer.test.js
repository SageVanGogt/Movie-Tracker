import errorReducer from './errorReducer';

describe('errorReducer', () => {
  it('should return a error messsage when called with the type ADD_ERROR', () => {
    const initialState = '';
    const mockAction = {
      type: 'ADD_ERROR',
      message: 'ALAN, YOU HAVE AN ERROR'
    };
    const expected = 'ALAN, YOU HAVE AN ERROR';
    const actual = errorReducer(initialState, mockAction);

    expect(actual).toEqual(expected);
  });
});