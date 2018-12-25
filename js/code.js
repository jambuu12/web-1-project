$("#searchBtn").click(function () {


    var searchTerm = $("#searchBar").val();
    var searchURL = `https://www.omdbapi.com/?apikey=ebd995fd&s=${searchTerm}`;

    $.get(searchURL, function (data) {
        $(".movie-wrapper-in").text("");
//        console.log(data);

var j = 1;

        for (var i = 0; i < data.Search.length; i++) {
            var movie = `
               
                  <div class="item col-md-3">
            <div class="item_in">
                <div class="item_image">
                    <img src=\"${data.Search[i].Poster}\">
                </div>
            
                <div class="item_title">
                    <a href=\"movie.html?movieId=${data.Search[i].imdbID}\">${data.Search[i].Title}</a>
                </div>
            
                 <div class="item_year">
                    ${data.Search[i].Year}
                </div>
            </div>
                  </div>`
                    ;

            $(".movie-wrapper-in").append(movie);
            
            if (j % 4 === 0 ) {
                 $(".movie-wrapper-in").append('<div class="cls"></div>');
            }
            j++;
            
        }
    });
});
