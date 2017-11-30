import axios from 'axios';

const baseUrl = process.env.REACT_APP_SERVER_URL;

export const getHotels = filters => {
  let query = '';
  query += `name=${filters.name}`;
  query += `&stars=${filters.stars.reduce((str, s) => `${str},${s}`, '')}`;
  return axios.get(`${baseUrl}/hotels?${query}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return [];
    });
}
