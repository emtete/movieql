export let movies = [
  {
    id: 1,
    name: "kim",
    score: 10,
  },
  {
    id: 2,
    name: "choi",
    score: 20,
  },
  {
    id: 3,
    name: "ahn",
    score: 30,
  },
  {
    id: 4,
    name: "lee",
    score: 40,
  },
  {
    id: 5,
    name: "koo",
    score: 50,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovie = movies.filter((movie) => id === movie.id);
  return filteredMovie[0];
};

export const deleteMovie = (id) => {
  const cleanedMovie = movies.filter((movie) => id !== movie.id);
  if (movies.length > cleanedMovie.length) {
    movies = cleanedMovie;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies[movies.length - 1].id + 1,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
