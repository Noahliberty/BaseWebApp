// $(document).ready(function() {
//   getWeather();
// })

function getWeather(searchQuery) {
  let url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=metric&appid=" // Need to re add API key. .env not working. 
  // +apiKey;
  $(".city").text("");
  $(".temp").text("");
  $(".error-message").text("");

  $.ajax(url,{success: function(data) {
    $(".city").text(data.name);
    $(".temp").text(data.main.temp);

  }, error: function(error){
    $(".error-message").text("An Error Occured");
    
  }})
}
 
function searchWeather() {
  let searchQuery = $(".search").val();
  getWeather(searchQuery);
}



// function showPicture(){
//   // use jQuery ($ is shorthand) to find the div on the page and then change the html
//   // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
//   $("#image").append('<img class="rounded-circle" src="images/high-five.gif"/>');
//   $("p").html("High five! You're building your first web app!");

//   // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
  
// }