import React from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler  from '../../hoc/withErrorHandler/withErrorHanlder';

class Orders extends React.Component {
  state = {
    orders:[],
    loading: true
  }
  componentDidMount() {
    axios.get('/orders.json')
    .then(res =>{
      const dataFetched= [];
      for (let key in res.data)  {
        dataFetched.push({
          ...res.data[key],
          id: key
        });
      }
      this.setState({loading: false, orders: dataFetched});
    })
    .catch(err => {
      this.setState({loading: false});
    });
  }

  render() {
    return (
      <div>
        {this.state.orders.map(
          order =>(
            <Order
              key={order.id}
              ingredients={order.ingrdients}
              price={order.price} />
          )
        )}
      </div>
    );
  }
}

export default withErrorHandler(Orders,axios);