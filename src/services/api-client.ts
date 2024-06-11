import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a023cceeb0eb438d828b0315e837fc04",
  },
});
