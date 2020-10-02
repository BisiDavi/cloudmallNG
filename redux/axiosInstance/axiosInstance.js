import axios from "axios";

const API_URL = "http://localhost:4000";

const client = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const fetchProduct = () => {
  return client.get("/products");
};
