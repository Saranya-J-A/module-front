import axios from "axios";

const API = axios.create({
  baseURL: "https://module-back.vercel.app/api/", // 👈 change if backend is deployed
});

// Attach token to requests (for /tasks routes etc.)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
