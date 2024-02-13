import axios from "./api";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default fetcher;
