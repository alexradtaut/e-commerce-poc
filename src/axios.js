import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-e-commerce-e0c72.cloudfunctions.net/api",
  //"http://localhost:5001/e-commerce-e0c72/us-central1/api",
});

export default instance;
