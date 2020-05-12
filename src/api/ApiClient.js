import { UserRequest } from './requests';

export default class ApiClient {
  constructor(apiConfig) {
    const requestConfig = apiConfig.requestConfig;

    this.users = new UserRequest(requestConfig);
  }
}