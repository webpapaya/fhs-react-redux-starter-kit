import {connect} from 'react-redux'
import UserListOrganism from './user-list-organism'
import { fetchUsers, createUser } from '../../domain/user/actions'

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadUsers: () => dispatch(fetchUsers()),
    onCreateUser: (user) => dispatch(createUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListOrganism)

