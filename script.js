const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

//задаем воросы по два раза
for (let i = 0; i < 2; i++) {
	const a = prompt("Какой фильм смотрели последним?", ""),
		b = prompt("На сколько оцените его?", "");
	//Проверка на пустые строки, кол-во символов и кнопку отмены
	if (
		a != null &&
		b != null &&
		/*не нажал отмена*/
		a != "" &&
		b != "" &&
		/*не пустая строка*/
		a.length < 50 &&
		b.length < 50
		/*не больше 50*/
	) {
		personalMovieDB.movies[a] = b;
		console.log("done");
	} else {
		console.log("error");
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log("Вы посмотрели мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	console.log("Вы посмотрели среднее кол-во фильмов");
} else if (personalMovieDB.count >= 30) {
	console.log("Вы киноман");
} else {
	console.log("Ошибка");
}

console.log(personalMovieDB);
