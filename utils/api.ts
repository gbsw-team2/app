import axios from "axios";

const api = axios.create({
  baseURL:  process.env.EXPO_PUBLIC_URL,
  timeout: 10000,
  // withCredentials: true,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

//에러 처리
api.interceptors.response.use(
  res => res,
  err => {
    console.error("API 에러 발생!!: ", err.response?.data || err.message);
    return Promise.reject(err);
  }
)

export default api;