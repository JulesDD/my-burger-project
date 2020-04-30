import axios from 'axios';

const instance = axios.create({
  baseURL: "https://my-burger-demo-dca27.firebaseio.com/",
});

export default instance;