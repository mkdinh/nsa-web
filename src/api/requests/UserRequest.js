import BaseRequest from './BaseRequest';

export default class UserRequest extends BaseRequest {
  constructor(config) {
    super(config, options => {
      const baseUri = `/users`;
      return options.id ? `${baseUri}/${options.id}` : baseUri;
    });
  }

  getUsers() {
    return this.get({});
  }

  getUser(id) {
    return this.get({ id });
  }
}