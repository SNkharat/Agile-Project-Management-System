import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

// 🔹 Attach access token to every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("access_token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

// 🔹 Handle token refresh automatically
API.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // If 401 & not retried yet
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refresh = localStorage.getItem("refresh_token");

        const res = await axios.post(
          "http://127.0.0.1:8000/api/login/refresh/",
          { refresh }
        );

        // Save new access token
        localStorage.setItem("access_token", res.data.access);

        // Attach new token
        originalRequest.headers.Authorization = `Bearer ${res.data.access}`;

        // Retry original request
        return API(originalRequest);

      } catch (err) {
        // Refresh failed → logout
        localStorage.clear();
        window.location.href = "/";
      }
    }

    return Promise.reject(error);
  }
);

export default API;