import React from 'react';
import {Route} from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';

class Checkout extends React.Component {
  // state = {
  //   ingredients: null,
  //   price: 0
  // };

  // componentWillMount() {
  //   const query = new URLSearchParams(this.props.location.search);
  //   const ingredients = {};
  //   let price = 0;

  //   for(let param of query.entries()) {
  //     if (param[0] === 'price') {
  //       price = param[1];
  //     } else {
  //     ingredients[param[0]] = +param[1];
  //     }
  //   }
  //   this.setState({ingredients: ingredients, totalPrice: price});
  // }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ings}
          checkoutCancel={this.checkoutCancelHandler}
          checkoutContinue={this.checkoutContinueHandler}/>
        <Route
          path={this.props.match.path + '/contact-data'}
          //render={(props)=>(<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>)}
          component = {ContactData}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients
  }
};

export default connect(mapStateToProps)(Checkout);