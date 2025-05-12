import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
    return axios('', {
        params: {
          q: query,
          key: '50246788-a6edd7baee942991099f119f0',
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
        },
      })
        .then(res => res.data)
        .catch(error => error);
    }
    