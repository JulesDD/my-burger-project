import React from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

export default class ContactData extends React.Component {
  state = {
    name: '',
    email: '',
    address: {
      street:'',
      postalCode: '',
    },
    loading: false
  }


  orderHandler = (e) => {
    e.preventDefault();
    this.setState({loading: true})
    const order={
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name:"Jules",
        address: {
          street: "808-70 Garry street",
          zipCode:"23452",
          country: "Canada"
        },
        email:"test@tested.com"
      },
      deliveryMethod: 'Courier'
    }
    axios.post('/orders.json', order)
    .then(response => {
      this.setState({loading: false});
      this.props.history.push('/');
    })
    .catch(error => {
      this.setState({ loading: false});
    });
  }

  render() {
    let form = (
      <form>
        <input className={classes.Input} type="text" name="name" placeholder="Please enter your name" />
        <input className={classes.Input} type="email" name="email" placeholder="Please enter your email address" />
        <input className={classes.Input} type="text" name="strett" placeholder="Street" />
        <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner/>;
    }
    return(
      <div className={classes.ContactData}>
        <h4>Enter your contact information</h4>
          {form}
      </div>
    );
  }
}