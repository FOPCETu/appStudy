let numberOfFilms;

//проверка через while на пустую строку, на строку и тд, без цикла
function start() {
	numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", "");
	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", "");
	}
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

function rememberMyFilms() {
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
}
rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Вы посмотрели мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		console.log("Вы посмотрели среднее кол-во фильмов");
	} else if (personalMovieDB.count >= 30) {
		console.log("Вы киноман");
	} else {
		console.log("Ошибка");
	}
}
detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.private);

function writeYourGenres() {
	//Задать 3 раза вопрос и поместить под номерами в массив ответ
	for (let i = 1; i <= 3; i++) {
		// const writerGenres = prompt(`Ваш любимый жанр под номером ${i}`);
		// personalMovieDB.genres[i - 1] /*<=убираем нулевой индекс*/ = writerGenres;

		// или так
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}
writeYourGenres();