import axios from "axios";

export const api = axios.create({
  baseURL: 'http://192.168.1.6:3333'
  // baseURL: 'https://baconipsum.com'
  // baseURL: 'https://localhost:3333'
});
