import BaseRequest from "./BaseRequest";

export default class UserRequest extends BaseRequest {
  constructor(config) {
    super(config, (options) => {
      const baseUri = `/users`;
      return options.id ? `${baseUri}/${options.id}` : baseUri;
    });
  }

  async getUsers() {
    const response = await this.get({});
    return response.data;
  }

  async getUser(id) {
    const response = await this.get({ id });
    return response.data;
  }
}
