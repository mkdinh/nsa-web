export default class DevelopmentRequestProxy {
  constructor(name, protocol, hostname, port) {
    this.name = name;
    this.protocol = protocol;
    this.hostname = hostname;
    this.port = port;
  }

  get url() {
    if (!this.protocol && this.hostname) {
      return "/api";
    }

    return this.port
      ? `${this.protocol}://${this.hostname}:${this.port}/api`
      : `${this.protocol}://${this.hostname}/api`;
  }
}
