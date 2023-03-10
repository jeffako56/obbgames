import * as request from "../config/apiClient";

export const getProducts = async (params = {}) => {
  console.log("getUsers services");
  return request.get(`products`, {
    params,
  });
};

export const getProductsItem = async (params = {}) => {
  console.log("getUsers services");
  console.log("productId",params);

  return request.get(`products/${params}`,{
    params,
  });
};
