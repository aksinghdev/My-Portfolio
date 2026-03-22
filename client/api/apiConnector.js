import axios from "axios"

export const axiosInstance = axios.create({
    withCredentials: true,
});

export const apiConnector = async(method, url, bodyData, headers, params) => {
  console.log("in api connector url",url);
  console.log("in api connector data",bodyData);
  return axiosInstance(
    {
      method:method,
      url : `${url}`,
      data : bodyData ? bodyData : null,
      headers : headers ? headers : {},
      params : params ? params : null,
    }
  );
};