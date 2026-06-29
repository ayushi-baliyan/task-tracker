import axios from "axios";

const API = axios.create({
  baseURL: "https://task-tracker-backend-4tjp.onrender.com/api/tasks",
});

export default API;