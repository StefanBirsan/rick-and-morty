import axios from 'axios';

const apiLink = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
});

export default apiLink;