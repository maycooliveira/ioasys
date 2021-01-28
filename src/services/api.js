/* eslint-disable */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import app from '../configs/app';
const accessToken = 'access-token';

const logger = true;

function instance() {
  let index;

  let axiosInstance = axios.create({
    baseURL: app.URL_BASE,
  });

  axiosInstance.interceptors.request.use(async request => {
    try {

      const token = await AsyncStorage.getItem('token');
      const keys = JSON.parse(token);
      if (token) {
        request.headers[accessToken] = keys.token;
        request.headers.client = keys.client;
        request.headers.uid = keys.uid;
      } 
    } catch (error) {}

    if (global.index_request == null) global.index_request = 0;
    index = global.index_request++;
    if (logger) {
      console.log(`URL<${index}>`, request.baseURL + request.url);
      console.log(`DADOS<${index}>`, JSON.stringify(request.data));
      console.log(`TOKEN<${index}>`, request.headers.Authorization);
    }
    return request;
  });

  axiosInstance.interceptors.response.use(
    function(response) {
      if (logger) console.log(`RETORNO<${index}>`, response.data);
      return response;
    },
    async error => {
      if (logger) {
        console.warn(`ERROR INFO:<${index}>`, error);
        try {
          console.info(`ERROR DATA:<${index}>`, error.response.data);
        } catch (error) {}
      }
      return Promise.reject(error);
    },
  );

  return axiosInstance;
}

export default {
  instance,
};
