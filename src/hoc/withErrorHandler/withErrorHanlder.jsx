import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxillary from '../Auxillary';
//import axios from 'axios';


const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component{
    state = {
      error: null
    }

    componentWillMount() {
      this.interceptorsReq = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });
      this.interceptorsRes = axios.interceptors.response.use(res => res,error => {
        this.setState({error: error});
      });
    }

    componentWillUnmount () {
      axios.interceptors.request.eject(this.interceptorsReq);
      axios.interceptors.response.eject(this.interceptorsRes);
    }

    errorConfirmedHandler =()=> {
      this.setState({error: null});
    }

    render () {
      return (
      <Auxillary>
        <Modal
        show={this.state.error}
        modalClosed={this.errorConfirmedHandler}>
          {this.state.error ? this.state.error : null}
        </Modal>
        <WrappedComponent {...this.props} />
      </Auxillary>
      );
    }
  }
}

export default withErrorHandler;