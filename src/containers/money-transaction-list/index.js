import { connect } from 'react-redux'
import Organism from './organism'

const mapStateToProps = (state, props) => {
  return {
    transactions: state.moneyTransactions.filter((transaction) => {
      return transaction.amount > props.minAmount
    }),
  }
}


export default connect(mapStateToProps)(Organism)