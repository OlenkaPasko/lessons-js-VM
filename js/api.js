//const API_KEY = "900c3c2e823d6abe3929dac959f94e63";
//const BASE_URL = "https://api.themoviedb.org/3";
//const TREND_URL = "${BASE_URL}/trending/movi";
//const SEARCH_URL = "${BASE_URL}/search/movi";
//const ID_URL = "${BASE_URL}/movi";

//export { API_KEY, BASE_URL, TREND_URL, SEARCH_URL, ID_URL };

//import axios from "axios";////
//import { API_KEY, BASE_URL, TREND_URL, SEARCH_URL, ID_URL } from "./api";

//export default {
  async getTrendData(page) {
    try {
      const { data } = await axios.get(
        `${TREND_URL}?api_key=${API_KEY}&page=${page}`
      );
      return data;
    } catch (error) {
      console.error("Smth wrong with api get full trends" + error);
    }
  },
//};

//export async function getTrending(page = 1) {
  //const url = `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US&page=${page}`;
  //return await axios
    //.get(url)
   // ////.then((response) => {
      //return response.data;
   // })
   // .catch((error) => console.log(error));
//}

//async function fetchMovieSearcher(text, page) {
  //try {
  //  const { data } = await axios.get(
   //   `${SEARCH_URL}?api_key=${API_KEY}&query=${text}&page=${page}`
   // );
  // // return data;
  //} catch (error) {
    //console.error("Smth wrong with api search fetch" + error);
  //}
//}

//async function getMovieById(id) {
 // try {
  //  const { data } = await axios.get(`${ID_URL}${id}?api_key=${API_KEY}`);
 //   const result = {};
 // } catch (error) {
 //   console.error("Smth wrong with api ID fetch" + error);
 // }
//}
