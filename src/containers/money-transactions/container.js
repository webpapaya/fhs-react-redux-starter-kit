import { connect } from "react-redux"
import { MoneyTransaction } from "./presentation"

const mapStateToProps = (state) => {
  return {
    users: state.user,
    moneyTransactions: state.moneyTransaction
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadData: () => {
      dispatch(window.fetchUsersActionCreator())
      dispatch(window.fetchMoneyTransactionsActionCreator())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoneyTransaction)