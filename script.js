var apiKey = "62035e60";

function searchMovieTitle(searchTerm) {
    fetch(`http://www.omdbapi.com/?t=${searchTerm}&apikey=${apiKey}`).then(result => {
        return result.json();
    }).then(result => {
        console.log('result:', result);
        init(result);
        document.getElementById('searchInput').value = ""; // reset search bar value after search is complete
    })
}

function init(resultFromServer) {
    let movieTitle = document.getElementById('movieTitle');
    let resultsInformation = document.getElementById('resultsInformation');
    let moviePoster = document.getElementById('moviePoster');
    let ratings = "<div class='ratings'>";

    movieTitle.innerHTML = '<h1>' + resultFromServer.Title + '</h1>'
    moviePoster.innerHTML = "<img class='urlImage' src='" + resultFromServer.Poster + "'>"
    resultsInformation.innerHTML = "<div class='resultsInformation'>" + "<span class='title'>" + "Title: " + resultFromServer.Title + "</span>" + "<span class='year'>" + "Year: " + resultFromServer.Year + "</span>" + "<span class='rated'>" + "Rated: " + resultFromServer.Rated + "</span>" + "<span class='released'>" + "Released: " + resultFromServer.Released + "</span>" + "<span class='genre'>" + "Genre: " + resultFromServer.Genre + "</span>" + "<span class='director'>" + "Director: " + resultFromServer.Director + "</span>" + "<span class='writer'>" + "Writer: " + resultFromServer.Writer + "</span>"
    for (var i = 0; i < resultFromServer.Ratings.length; i++) {
        ratings += "<span class='source'>" + "Source: " + resultFromServer.Ratings[i].Source + "</span>";
        ratings += "<span class='ratingsValue'>" + "Ratings: " + resultFromServer.Ratings[i].Value + "</span>";
    }
    ratings += "</div>"
    document.getElementById('ratings').innerHTML = ratings;
}

document.getElementById('searchMovieTitleButton').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').value;
    if (searchTerm) {
        searchMovieTitle(searchTerm);
    }
});