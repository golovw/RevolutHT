import axios from 'axios';

export interface ApiAdapterI {
  catchError: (error: Error) => void;
  get: (endpoint: string, params: object) => any;
  post: (endpoint: string, body: object, params: object) => any;
}

export class ApiAdapter {
  catchError = (error: Error) => console.error('Api Adapter: ', error);

  get = (endpoint: string, params = {}) => {
    return axios.get(endpoint, { params })
      .then(response => response)
      .catch(this.catchError);
  };

  post = (endpoint: string, body = {}, params = {}) => {
    return  axios.post(endpoint, body, { params })
      .then(response => response)
      .catch(this.catchError);
  };
}
