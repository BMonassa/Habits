import axios from "axios";

export const api = axios.create({
 baseURL: 'https://nodedeploy-habits.onrender.com'
  // baseURL: 'https://baconipsum.com'
  // baseURL: 'https://localhost:3333'
});
