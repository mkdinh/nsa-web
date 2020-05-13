import ApiClient from "./ApiClient";
import AxiosContext from "./AxiosContext";
import RequestProxy from "./RequestProxy";

const config = {
  requestConfig: {
    context: new AxiosContext(),
    proxy:
      process.env["NODE_ENV"] === "production"
        ? new RequestProxy("production", "https", "placeholder")
        : new RequestProxy("development", "http", "192.168.1.9", 3001),
  },
};

export default new ApiClient(config);
