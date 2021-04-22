const initialState = { token: null }
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'user/signIn':
      return { token: action.payload.token }
    case 'user/signOut':
      return { token: null }
    default: return state
  }
}