console.log("hello")



var topic =

var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=dogs";


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
           var gifUrl=response.data.image_original_url;


        })
