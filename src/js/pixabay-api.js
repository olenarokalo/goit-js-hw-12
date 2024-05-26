const apiKey = '44069289-55a8aa963762c475e8ab93eb8';
const baseUrl = 'https://pixabay.com/api/';

export const fetchImages = (image = '') => {
  const searchParams = new URLSearchParams({
    key: apiKey,
    q: image,
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: true,
  });

  return fetch(`${baseUrl}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};
