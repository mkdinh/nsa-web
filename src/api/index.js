import ApiClient from "./ApiClient";
import AxiosContext from "./AxiosContext";
import RequestProxy from "./RequestProxy";

const config = {
  requestConfig: {
    context: new AxiosContext(),
    proxy:
      process.env["NODE_ENV"] === "production"
        ? new RequestProxy("production", "", "")
        : new RequestProxy("development", "http", "localhost", 3001),
  },
};

export default new ApiClient(config);
