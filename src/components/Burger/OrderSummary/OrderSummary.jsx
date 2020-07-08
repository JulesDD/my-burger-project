import React from 'react';
import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingridentSummary = Object.keys(props.ingredients)
  .map( igKey => {
    return <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
          </li>
  });
  return(
    <Auxillary>
      <h3>Welcome to MyBurger</h3>
      <h4>Here is your order</h4>
      <p>Details:</p>
      <ul>
        {ingridentSummary}
      </ul>
      <p>Total Price: <strong>${props.price.toFixed(2)}</strong></p>
      <p>Continue?</p>
      <Button btnType="Success" clicked={props.purchaseContinued}>Yes</Button>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>No</Button>
    </Auxillary>
  );
};

export default orderSummary;