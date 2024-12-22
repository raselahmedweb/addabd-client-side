// axiosRequest.js
import axios from "axios";

const apiReq = async ({ endPoint, method, data }) => {
    return await axios({
      url: `http://localhost:3001/${endPoint}`,
      method: method,
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true, // this is for handling cookies
    });
  };
  

export default apiReq;