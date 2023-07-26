import axios from "axios";

export default axios.create({
  baseURL: "https://5835-2603-7000-8500-cb7-a763-ac6c-4d16-eb60.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});
