import React from 'react';
import Auxillary from '../Auxillary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';
import { NULL } from 'node-sass';

class Layout extends React.Component {
  state ={
    showSideDrawer: false
  }

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }

  render() {
    return(
      <Auxillary>
        <Toolbar drawerToggledClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer
          closed={this.sideDrawerCloseHandler}
          open={this.state.showSideDrawer} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Auxillary>
    );
  }
};

const mapStateToProps = state => {
  return {
    isAuthenticate: state.auth.token !== NULL
  }
}

export default connect(mapStateToProps)(Layout)
