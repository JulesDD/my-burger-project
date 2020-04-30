import React from 'react';
import bkLogo from '../../assets/images/original.png';
import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={bkLogo} alt="I am loving it?" />
  </div>

);

export default logo;