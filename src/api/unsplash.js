import axios from 'axios';

export default axios.create({
baseURL: 'https://api.unsplash.com',
headers: {
    Authorization: 'Client-ID RwRusfu0PNGXIWIu88x06dE7MCFGmRE0KbWi21rxPy4'
  }
});