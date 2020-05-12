import axios from 'axios';

export default class LocalContext {
  constructor() {
    this.requestOptions = {
      withCredentials: true
    };
  }

  get(endpoint, options) {
    return axios.get(endpoint, this.mergeOptions(options.requestOptions));
  }

  post(endpoint, options) {
    return axios.post(
      endpoint,
      options.data,
      this.mergeOptions(options.requestOptions)
    );
  }
  async put(endpoint, options) {
    return axios.put(
      endpoint,
      options.data,
      this.mergeOptions(options.requestOptions)
    );
  }

  delete(endpoint, options) {
    return axios.delete(endpoint, this.mergeOptions(options.requestOptions));
  }

  mergeOptions(options) {
    return { ...this.requestOptions, ...options };
  }
}