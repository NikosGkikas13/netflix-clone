import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

//  axios example
//  instance.get('/url-example')
//  this fetches data from https://api.themoviedb.org/3/url-example
export default instance;
