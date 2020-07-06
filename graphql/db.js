import axios from "axios";
const list_movies = "https://yts.mx/api/v2/list_movies.json?";
const detail_movie = "https://yts.mx/api/v2/movie_details.json?";

export const getMovies = async (limit, rating) => {
  let REQUEST_URL = list_movies;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  // return movies
  return (await axios(REQUEST_URL)).data.data.movies;
};

export const getMovie = async (id) => {
  if (!id) return;
  let REQUEST_URL = detail_movie;
  const returnData = await axios(REQUEST_URL, { params: { movie_id: id } });
  // return movies
  return returnData.data.data.movie;
};
