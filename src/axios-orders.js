import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ac7c5.firebaseio.com/'
});

export default instance;