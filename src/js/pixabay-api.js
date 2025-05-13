import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
  try {
    const response = await axios('', {
      params: {
        q: query,
        key: '50246788-a6edd7baee942991099f119f0',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15, 
        page: page,   
      },
    });

    return response.data;
  } catch (error) {
    return error; 
  }
}
