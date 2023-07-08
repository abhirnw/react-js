import axios from "axios";

// const accessToken = Cookies.get("token");

export const axiosApi = axios.create({
  baseURL: process.env.REACT_APP_baseURL,
});

/**
 *  get api method
 */
export async function get(url, config = {}) {
  return await axiosApi
    .get(url, { ...config })
    .then((response) => response.data);
}

/**
 *  post api method
 */
export async function post(url, data, config = {}) {
  return await axiosApi
    .post(url, { ...data }, { ...config })
    .then((response) => response.data);
}

/**
 * form data post api method
 */
export async function postFormData(url, data, config = {}) {
  return await axiosApi
    .post(url, data, { ...config })
    .then((response) => response.data);
}

/**
 * form data put api method
 */
export async function putFormData(url, data, config = {}) {
  return await axiosApi
    .put(url, data, { ...config })
    .then((response) => response.data);
}

/**
 * put api method
 */
export async function putApi(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

/**
 * delete api method
 */
export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then((response) => response.data);
}
