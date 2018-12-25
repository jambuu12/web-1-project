var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var movieId = getUrlParameter("movieId");

var apiUrl = `http://www.omdbapi.com/?apikey=ebd995fd&i=${movieId}`;


$.get(apiUrl, function (data) {

    var info = `
    <div id="inner_item">
    <div class="row">
        <div class="inner_item_image col-md-4">
            <img src=\"${data.Poster}\"/>
        </div>
    
        <div class="inner_item_other col-md-8">
    
            <div class="movie_title">Title: ${data.Title}</div>
            <div class="movie_date">Date: ${data.Year} </div>
            <hr>
            <div class="movie_director">Director: ${data.Director}</div>

            <div class="movie_plot">Plot: ${data.Plot}</div>
    
        </div>
    
    </div>
    </div>`;

    $(".movie-wrapper-in").append(info);

});

