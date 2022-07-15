const marvelMovies = [
  {
    name: "Eternals",
    year: 2021,
    rating: 47,
  },

  {
    name: "Black Widow",
    year: 2021,
    rating: 79,
  },

  {
    name: "Thor: Ragnarok",
    year: 2017,
    rating: 93,
  },

  {
    name: "Avengers: Infinity War",
    year: 2018,
    rating: 85,
  },

  {
    name: "Spider-Man: Homecoming",
    year: 2017,
    rating: 92,
  },
];

// REDUCE METHOD
const highestRatedMUMovie = marvelMovies.reduce(
  (highestRated, currentRated) => {
    if (currentRated.rating > highestRated.rating) {
      return currentRated;
    }
    return highestRated;
  }
);

// FILTER METHOD
const newMovies = marvelMovies.filter((movie) => {
  return movie.year > 2020;
});
