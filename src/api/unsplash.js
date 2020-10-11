import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID JPG-07qKCy1Qmp9bY85GH-_R7AT0r-bSPNBg9BdN13U',
  },
});
