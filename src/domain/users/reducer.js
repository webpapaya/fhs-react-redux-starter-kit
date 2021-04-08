const initialState = []
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'users/fetched':
      return [...state, ...action.payload]
    default:
      return state;
  }
}