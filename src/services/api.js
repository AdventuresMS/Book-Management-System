import axios from "axios";

const API_URL =
  "https://6a15a9be91ff9a63de089443.mockapi.io/books";

const api = axios.create({
  baseURL: API_URL,
});

export default api;