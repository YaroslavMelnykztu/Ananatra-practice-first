let numberOfFilms;

function start(){
    while(true){
        numberOfFilms = prompt("Скільки фільмів Ви вже переглянули?", "");

        if(numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)){
            continue;
        } else {
            numberOfFilms = +numberOfFilms;
            break;
        }
    }
}


start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: objMovies = {

    },
    actors: objActors = {

    },
    genres: arrGenres = [],
    privat: false 
};

function rememberMyFilms(){
    for(let i = 0; i < numberOfFilms; i++)
    {
        const lastFilm = prompt("Який один з останніх переглянутих фільмів?", "");
        const gradeOfFilm = +prompt("Яку оцінку фільму Ви дасте?", "5.0");
        if (lastFilm != null && gradeOfFilm != null && lastFilm != '' && gradeOfFilm != '' && lastFilm.length < 50)
        {
            personalMovieDB.movies[lastFilm] = gradeOfFilm;
            console.log('Done');
        } else{
            i--;
            console.log('Error');
        }
    }
}

rememberMyFilms();

function detectLevel(){
    if (personalMovieDB.count < 10)
        console.log('Ви переглянули досить мало фільмів!');
    else if (personalMovieDB.count < 30)
        console.log('Ви класичний глядач!');
    else 
        console.log('Ви переглянули досить багато фільмів!');
}

detectLevel();

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

let genres = []; // чи можна const

function writeYourGenres(){
    let genre;
    for (let i = 0; i < 3; i++){
        genre = prompt(`Ваш улюблений жанр номер ${i+1}:`, "");
        if (genre != null && genre != ''){
            genres[i] = genre;
        }
    }
}