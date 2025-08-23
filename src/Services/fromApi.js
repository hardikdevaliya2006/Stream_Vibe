import axios from "axios";

const BASE_URL = "https://formcarry.com/s/siCCHnU7ujf";

const fromApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default fromApi;