import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://localhost:5001",
  headers: {
    "Content-Type": "application/json",
  },
  // baseURL: "https://hub.dummyapis.com/delays",
});
