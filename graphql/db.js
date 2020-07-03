export const movies = [
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
