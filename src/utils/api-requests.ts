const BASE_LIST_URL = 'https://picsum.photos//v2/list';

export function getImages(page: number, limit: number) {
  const queryStr = `${BASE_LIST_URL}?page=${page}&limit=${limit}`;
  return fetch(queryStr)
    .then(res => {
      if (res.ok)
        return res.json()

      return Promise.reject(res.status)
    })
}



