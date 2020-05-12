export default class BaseRequest {
    constructor(config, endpoint) {
      this.context = config.context;
      this.proxy = config.proxy;
      this.endpoint = endpoint;
    }
  
    get(options) {
      return this.context.get(this.evaluateEndpoint(options), options);
    }
  
    post(options) {
      return this.context.post(this.evaluateEndpoint(options), options);
    }
  
    put(options) {
      return this.context.put(this.evaluateEndpoint(options), options);
    }
  
    delete(options) {
      return this.context.delete(this.evaluateEndpoint(options), options);
    }
  
    evaluateEndpoint(options) {
      let endpoint = this.endpoint(options);
  
      if (this.proxy) {
        if (endpoint[0] === '/') {
          endpoint = endpoint.substr(1);
        }
        return `${this.proxy.url}/${endpoint}`;
      } else {
        return endpoint;
      }
    }
  }