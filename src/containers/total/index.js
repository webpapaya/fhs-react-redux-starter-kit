import { connect } from 'react-redux'
import Organism from './organism'

const mapStateToProps = (state, props) => {
  return {
    total: state.moneyTransactions.length
  }
}


export default connect(mapStateToProps)(Organism)