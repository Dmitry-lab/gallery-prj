const BASE_LIST_URL = 'https://pixabay.com/api/?key=23827103-9ad190e11e1d6ccfdb16f473d&q=yellow+flowers&image_type=photo';
const KEY = '23827103-9ad190e11e1d6ccfdb16f473d';
const QUERY = 'car';

export function getImages(page: number, limit: number) {
  const queryStr = `${BASE_LIST_URL}?key=${KEY}&q=${QUERY}&image_type=photo&page=${page}&per_page=${limit}`;
  return fetch(queryStr)
    .then(res => {
      if (res.ok)
        return res.json()

      return Promise.reject(res.status)
    })
}



