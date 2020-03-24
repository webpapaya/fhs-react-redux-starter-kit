export const fetchUsers = () => async (dispatch) => {
  const users = await Promise.resolve([
    { id: 1, name: 'Sepp'},
    { id: 2, name: 'Mike'}
  ])

  dispatch({ type: 'fetchUsers/success', payload: users })
}


export const createUser = (user) => (dispatch) => {
  dispatch({ type: 'createUser/success', payload: user })
}
