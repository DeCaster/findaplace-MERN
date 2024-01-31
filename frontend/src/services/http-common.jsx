import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json;charset=UTF-8"
  },
});
