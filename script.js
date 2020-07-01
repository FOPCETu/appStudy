const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};
const a = prompt("Какой фильм смотрели последним?", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Какой фильм смотрели последним?", ""),
  d = prompt("На сколько оцените его?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);