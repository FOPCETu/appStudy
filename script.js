const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    personalMovieDB.count = prompt("Сколько фильмов Вы уже посмотрели?", "");
    //проверка через while на пустую строку, на строку и тд, без цикла
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = prompt("Сколько фильмов Вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Вы посмотрели мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("Вы посмотрели среднее кол-во фильмов");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.private) {
      personalMovieDB.private = false;
    } else {
      personalMovieDB.private = true;
    }
  },
  // writeYourGenres: function () {
  //   //Задать 3 раза вопрос и поместить под номерами в массив ответ
  //   for (let i = 1; i <= 3; i++) {
  //     let genre = prompt(`Ваш любимый жанр под номером ${i}`);
  //     if (genre === "" || genre === null) {
  //       console.log("Вы ввели некорректные данные или не ввели их вообще");
  //     } else {
  //       personalMovieDB.genres[i - 1] = genre;
  //     }
  //   }
  //   personalMovieDB.genres.forEach((item, i) => {
  //     console.log(`Любимый жанр ${i + 1} - это ${item}`);
  //   });
  // },

  ///Второй способ
  writeYourGenres: function () {
    //Задать 3 раза вопрос и поместить под номерами в массив ответ
    for (let i = 1; i < 2; i++) {
      let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
      if (genres === "" || genres === null) {
        console.log("Вы ввели некорректные данные или не ввели их вообще");
        i--;
      } else {
        personalMovieDB.genres = genres.split(", ");
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};
