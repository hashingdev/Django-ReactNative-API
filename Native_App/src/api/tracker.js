import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://c248345d701c.ngrok.io/'
});

export default instance;