// Create add movies function
    //List is for checking

let list = [];
i = localStorage.length;

addMovieWatched = function () {
    const movieWatched = document.getElementById("input-watched-movie");
    const text = document.createTextNode(movieWatched.value);
    const newItem = document.createElement("li");
    newItem.appendChild(text);


    //add new movie to the list if its not empty and not in the list already
    const watchedList = document.getElementById("watchedList")
    const isInList = list.includes(movieWatched.value);

    if (movieWatched.value && !isInList) {
        list.push(movieWatched.value);
        console.log(list);
        i++;
        watchedList.insertBefore(newItem, watchedList.childNodes[0]);

        // Store into local storage
        localStorage.setItem(i, movieWatched.value);
    };

    //reset input field
    document.getElementById("input-watched-movie").value = "";

};

getMovies = function() {
    for(x=1; x<=localStorage.length; x++){
        movie = localStorage.getItem(x);
        console.log(movie);
        list.push(movie);
        const text = document.createTextNode(movie);
        const newItem = document.createElement("li");
        newItem.appendChild(text);
        const watchedList = document.getElementById("watchedList");
        watchedList.insertBefore(newItem, watchedList.childNodes[0]);

        //count how many movies watched
        const movieCounter = list.length;
        const text2 = document.createTextNode(movieCounter);
        const newItem2 = document.createElement("p");
        newItem.appendChild(text2);

        const movieNumber = document.getElementById("movieNumber");
        movieNumber.innerText = `You have ${movieCounter} movies in your Db:`  ;
    };
};
