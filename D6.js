/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log("Esercizio 1: ");

const concatenated = (str1, str2) => {
  console.log(
    `${str1}`.slice(0, 2).toUpperCase() + `${str2}`.slice(-3).toUpperCase()
  );
};
concatenated("Hello", "World");
/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log("Esercizio 2: ");
const randomNumbersCollection = () => {
  const tenRandomNumbers = [];
  for (let i = 0; i < 10; i++) {
    tenRandomNumbers.push(Math.floor(Math.random() * 101));
  }
  console.log(tenRandomNumbers);
};
randomNumbersCollection();

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
console.log("Esercizio 3: ");
const numbers = [12, 24, 45, 98, 5, 665, 65, 6, 66];

const onlyEvens = (arr) => {
  return arr.filter((x) => x % 2 === 0);
};

console.log(onlyEvens(numbers));

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log(`Esercizio 4: `);
// let total = 0;
// const sumOfNumbers = numbers.forEach((num) => (total += num));

const sumAll = (arr) => {
  let total = 0;
  arr.forEach((num) => {
    total += num;
  });
  console.log(total);
};
sumAll(numbers);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array */
console.log("Esercizio 5: ");
// const sumItAgain = numbers.reduce(
//   (accumulator, current) => accumulator + current
// );
// console.log(sumItAgain);

const sumItAgainWithReduce = (arr) => {
  const result = arr.reduce((total, current) => {
    return (total += current);
  }, 0);
  console.log(result);
};
sumItAgainWithReduce(numbers);

/* ESERCIZIO 6 (map) 
Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n 
*/
console.log("Esercizio 6: ");
// const newNumberString = numbers.map((x) => x + 2);
// console.log(newNumberString);

const addNToTheNumbers = (str, numFisso) => {
  return str.map((ogniValDiSTR) => {
    return ogniValDiSTR + numFisso;
  });
};
console.log(
  "n = 5 (Viene definito all'esecuzione della funzione, come secondo parametro)"
);
console.log(addNToTheNumbers(numbers, 5));

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log("Esercizio 7: ");
const phrase = ["Ciao", "Mi", "Chiamo", "Marco"];
const checkLenght = (arr) => {
  return arr.map((x) => x.length);
};

console.log(checkLenght(phrase));

//METODO GENERALE =
const generateLenghtsFromArray = function (arr) {
  const newArray = arr.map((word) => {
    return word.lenght;
  });
  return newArray;
};
/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log("Esercizio 8: ");

//METODO SEMPLICE
// const oddNumbersFromOneToOneHundred = [];
// for (let i = 1; i < 101; i += 2) {
//   oddNumbersFromOneToOneHundred.push(i);
// }
// console.log(oddNumbersFromOneToOneHundred);
//METODO GENERALE:

const justOdds099 = () => {
  const odds = [];
  for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
      odds.push(i);
    }
  }
  return odds;
};
console.log(justOdds099());
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log("Esercizio 9:");
const findTheOldest = (arr) => {
  let oldest = arr[0]; // supponiamo che il primo elemento dell'array che abbiamo passato nella funzione sia il più vecchio
  arr.forEach((movie) => {
    if (movie.Year < oldest.Year) {
      // La metodologia corretta prevede l'utilizzo dei parseInt nei parametri confrontati
      oldest = movie;
    }
  });
  return oldest;
};
console.log(findTheOldest(movies));
/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log("Esercizio 10: ");
// const numberOfMovies = movies.length;
// console.log(numberOfMovies);
const numberOfMovies = (arr) => {
  return arr.length;
};
console.log(numberOfMovies(movies));

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log("Esercizio 11: ");
// const movieNames = movies.map((x) => x.Title);
// console.log(movieNames);
const onlyTitles = (arr) => {
  return arr.map((x) => x.Title);
};

console.log(onlyTitles(movies));

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log("Esercizio 12: ");
// Nell'esempio specifico:
// const afterTwoThousand = movies.filter((x) => parseInt(x.Year) > 2000);
// console.log(afterTwoThousand);

const afterTwoThousandFilm = function (arr) {
  return arr.filter((x) => {
    return parseInt(x.Year) > 2000;
  });
};
console.log(afterTwoThousandFilm(movies));

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
console.log("Esercizio 13: ");
const sumAllTheYears = (array) => {
  return array.reduce(
    (accumulator, current) => accumulator + parseInt(current.Year),
    0
  );
};

console.log(sumAllTheYears(movies));
/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log("Esercizio 14: ");

const findById = (movieID) => {
  const foundMovie = movies.find((x) => {
    return x.imdbID === movieID;
  });
  console.log(foundMovie);
};
findById("tt4154796");

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
console.log("Esercizio 15: ");

const findIndexByYear = (year) => {
  const foundIndex = movies.findIndex((x) => {
    return x.Year === year;
  });
  console.log(foundIndex);
};

findIndexByYear("2015");
