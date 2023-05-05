import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  timeout: 60000,
});

export default instance;
