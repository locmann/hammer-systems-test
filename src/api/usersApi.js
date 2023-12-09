import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getUserData = async () => {
  try {
    const response = await instance
      .get('/users')
      .then((res) => res.data);

    return response;
  } catch (e) {
    console.log(e);
  }
};
