var apiKey = "vkWBAa2LfhiieA9v1VVSP5pwtU8MRTB4";
var searchTerm = "goodjob"
var score = 6

fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&rating=pg-13`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) { 
  display_image(data.message);
    console.log(data);
  });
  function display_image(image_url){
     document.getElementById("image").src = image_url
  }
if (score > 6) {
} else {
  result = "Loser";
}
if (score > 7) {
} else {
  result = "almost";
}
if (score < 7) {
} else {
  result = "YAY";
}