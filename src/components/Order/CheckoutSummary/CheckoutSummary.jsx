import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';


const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Good burger, home of the good burger.</h1>
      <div style={{width: 100%, margin: 'auto'}}>
        <Burger ingredient={props.ingredients} />
      </div>
      <Button
      btnType="Danger"
      clicked={}>Cancel</Button>
      <Button
      btnType="Success"
      clicked={}>Continue</Button>
    </div>
  );
}

export default checkoutSummary;