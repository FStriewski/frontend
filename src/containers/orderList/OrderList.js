import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from "material-ui/styles"
import { connect } from 'react-redux'
import compose from "lodash/fp/compose"
import { fetchOrdersByBuyerId } from  '../../actions/orders'
import OrderCardBuyer from '../../components/orderList/OrderCardBuyer'
import './OrderList.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

class OrderListBuyer extends PureComponent {
  static propTypes = {
  classes: PropTypes.object.isRequired
  }

  componentWillMount() {
    this.props.fetchOrdersByBuyerId(this.props.match.params.id)
  }


  render() {
    const { classes, orders } = this.props

    return (
      <div className={classes.root}>
        {orders.map( order =>
          <OrderCardBuyer order={order}/>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { fetchOrdersByBuyerId })
)(OrderListBuyer)
