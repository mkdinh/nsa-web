import ApiClient from './ApiClient';
import AxiosContext from './AxiosContext';
import RequestProxy from './RequestProxy';

const config = {
  requestConfig: {
    context: new AxiosContext(),
    proxy:
      process.env['NODE_ENV'] === 'production'
        ? new RequestProxy('development', 'http', 'localhost', 3000)
        : new RequestProxy('production', 'https', 'placeholder')
  }
};

export default new ApiClient(config);