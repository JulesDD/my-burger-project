import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Auxillary from  '../../../hoc/Auxillary';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return(
    <Auxillary>
      <BackDrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join('')} onClick={props.closed}>
        <div className={classes.Logo}>
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
      </div>
    </Auxillary>
  );
};

export default sideDrawer;