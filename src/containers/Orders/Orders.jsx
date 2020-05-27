import React from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler  from '../../hoc/withErrorHandler/withErrorHanlder';
import * as actions from '../../Store/actions/actionIndex';
import {connect} from 'react-redux';
import Spinner  from '../../components/UI/Spinner/Spinner';

class Orders extends React.Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    let order = <Spinner />;
    if (!this.props.loading) {
    order = this.props.orders.map(
              order => (
                <Order
                  key={order.id}
                  ingredients={order.ingrdients}
                  price={order.price} />
                  ))
                };
    return (
      <div>
        {order}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axios));