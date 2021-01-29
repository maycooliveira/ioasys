import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import app from '../configs/app';
const accessToken = 'access-token';

function instance() {
  let axiosInstance = axios.create({
    baseURL: app.URL_BASE,
  });

  axiosInstance.interceptors.request.use(async (request) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const keys = JSON.parse(token);
      if (token) {
        request.headers[accessToken] = keys.token;
        request.headers.client = keys.client;
        request.headers.uid = keys.uid;
      }
    } catch (error) {}

    return request;
  });

  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      return Promise.reject(error.response.data);
    },
  );

  return axiosInstance;
}

export default {
  instance,
};
