const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function(){
        while(true){
            personalMovieDB.count = prompt("Скільки фільмів Ви вже переглянули?", "");

            if(personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)){
                continue;
            } else {
                personalMovieDB.count = +personalMovieDB.count;
                break;
            }
        }
    },

    rememberMyFilms: function(){
        for(let i = 0; i < personalMovieDB.count; i++)
        {
            const lastFilm = prompt("Який один з останніх переглянутих фільмів?", "").trim();
            const gradeOfFilm = +prompt("Яку оцінку фільму Ви дасте?", "5.0").trim();
            if (lastFilm != null && gradeOfFilm != null && lastFilm != '' && gradeOfFilm != '' && lastFilm.length < 50)
            {
                personalMovieDB.movies[lastFilm] = gradeOfFilm;
                console.log('Done');
            } else{
                i--;
                console.log('Error');
            }
        }
    },

    detectLevel: function(){
        if (personalMovieDB.count < 10)
        console.log('Ви переглянули досить мало фільмів!');
        else if (personalMovieDB.count < 30)
            console.log('Ви класичний глядач!');
        else 
            console.log('Ви переглянули досить багато фільмів!');
    },

    showMyDB: function(){
            if (!personalMovieDB.privat){
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function(){
        let genre;
        for (let i = 0; i < 3; i++){
            genre = prompt(`Ваш улюблений жанр номер ${i+1}:`, "");
            if (genre === null || genre === ''){
                i--;
                continue;
            } else {
                personalMovieDB.genres[i] = genre;
            }
        }
        personalMovieDB.genres.forEach(function(item, i){
            console.log(`Улюблений жанр ${i+1} - це ${item} `);
        })
    },

    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
    
};

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectLevel();

// personalMovieDB.showMyDB(personalMovieDB.privat);

// personalMovieDB.writeYourGenres();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB(personalMovieDB.privat);