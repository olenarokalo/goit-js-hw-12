import axios from 'axios';

const apiKey = '44069289-55a8aa963762c475e8ab93eb8';
const baseUrl = 'https://pixabay.com/api/';
export const perPage = 15;

axios.defaults.baseURL = baseUrl;

export const fetchImages = async (image = '', photosCurrentPage = 1) => {
  const response = await axios.get(``, {
    params: {
      key: apiKey,
      q: image,
      image_type: `photo`,
      orientation: `horizontal`,
      safesearch: `true`,
      per_page: perPage,
    },
  });

  return response.data;
};
