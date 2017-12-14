import axios from "axios";

const facade = {};

const api = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

facade.request = config => api.request(config);
["get", "head"].forEach(method => {
  facade[method] = (url, config) => facade.request({ ...config, method, url });
});
["delete", "post", "put", "patch"].forEach(method => {
  facade[method] = (url, data, config) =>
    facade.request({ ...config, method, url, data });
});

class API {
  static fetchAllPosts() {
    return facade.get("/posts");
  }

  static fetchPost(id) {
    return facade.get(`/posts/${id}`);
  }
}

export default API;
