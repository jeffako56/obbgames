import axios from "axios";
import qs from "qs";

const BASE_URI = `https://dummyjson.com/`;
const instance = axios.create({
  baseURL: BASE_URI,
  timeout: 60000,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

instance.interceptors.request.use((request) => {
  console.log("Starting Request", JSON.stringify(request, null, 2));
  return request;
});

export default instance;

export const post = async (url, { payload = {} } = {}) => {
  const config = {
    method: "POST",
    url,
    paramsSerializer: {
      serialize: (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
    },
    data: payload,
  };

  return instance(config).then(parseResponse);
};

export const put = async (url, { payload = {} } = {}) => {
  const config = {
    method: "PUT",
    url,
    paramsSerializer: {
      serialize: (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
    },
    data: payload,
  };

  return instance(config).then(parseResponse);
};

export const del = async (url, { payload = {} } = {}) => {
  const config = {
    method: "DELETE",
    url,
    paramsSerializer: {
      serialize: (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
    },
    data: payload,
  };

  return instance(config).then(parseResponse);
};

export const get = async (url, { params = {  } }) => {
  console.log("getting client");
  const config = {
    method: "GET",
    url,
    paramsSerializer: {
      serialize: (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
    },
   params
  };

  return instance(config).then(parseResponse);
};

function parseResponse(response) {
  return response.data;
}
