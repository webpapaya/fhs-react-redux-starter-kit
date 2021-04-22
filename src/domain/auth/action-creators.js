export const signIn = ({ email, password }) => (dispatch) => {
  const response = await fetch('http://localhost:3000/sign_in', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  })
  const token = response.headers.get('authentication')
  dispatch({
    type: 'user/signIn',
    payload: { token }
  })
}

export const signIn = () => (dispatch) => {
  dispatch({
    type: 'user/signOut',
    payload: { token }
  })
}


export const fetchUsers = ({ email, password }) => (dispatch, getState) => {
  const token = getState().auth.token

  const response = await fetch('http://localhost:3000/sign_in', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  })
  const token = response.headers.get('authentication')
  dispatch({
    type: 'user/signIn',
    payload: { token }
  })
}