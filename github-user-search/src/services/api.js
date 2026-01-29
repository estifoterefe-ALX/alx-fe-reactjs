import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
  },
});

export default api;
// api.js
// import axios from "axios";
// import { useAuthStoreSelectors } from "./stores/authStore";

// const api = axios.create({
//   baseURL: "https://api.github.com",
//   withCredentials: true, // required to send HttpOnly cookie
// });

// // Request interceptor: attach access token
// api.interceptors.request.use((config) => {
//   const token = useAuthStoreSelectors.use.token();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // Response interceptor: handle 401 (token expired)
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         // call refresh endpoint; backend reads HttpOnly refresh token
//         const res = await axios.post(
//           "https://your-api.com/auth/refresh",
//           {},
//           { withCredentials: true }, // send HttpOnly cookie
//         );

//         const newToken = res.data.accessToken;
//         const loginfunc = useAuthStoreSelectors.use.login();
//         loginfunc(useAuthStoreSelectors.use.user(), newToken);

//         // retry original request with new token
//         originalRequest.headers.Authorization = `Bearer ${newToken}`;
//         return api(originalRequest);
//       } catch (refreshError) {
//         // refresh failed: logout
//         const logoutfunc = useAuthStoreSelectors.use.logout();
//         logoutfunc();
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   },
// );

// export default api;
