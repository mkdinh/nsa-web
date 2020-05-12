export default class DevelopmentRequestProxy {
    protocol = 'http';
    hostname = 'localhost';
    port = 5000;
    name = 'Development API Proxy';
    version = 'v1';

    constructor(name, protocol, hostname, port) {
        this.name = name;
        this.protocol = protocol;
        this.hostname = hostname;
        this.port = port;
    }

    get url() {
        return this.port
            ? `${this.protocol}://${this.hostname}:${port}/api`
            : `${this.protocol}://${this.hostname}/api`;;
    }
  }