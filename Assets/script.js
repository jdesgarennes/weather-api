var searchCity = document.querySelector("#sButton");
var cityInput = document.querySelector("#textBox");
var apiKey = '1324b076d7d8ed0b45bf5b20fdc67fb8';
var city='Murrieta';
const date = moment();

// Create fetch for API to get weather
function getWeather(DATA) {
  var city = cityInput.value;
  var requestUrl ='https://api.openweathermap.org/data/2.5/weather?q=';
  //var cityHumidity =[];
  fetch(requestUrl + city +"&appid="+ apiKey+"&units=imperial", {
})  
.then(response => {
 return response.json();
})
  .then(function (data){
  cityName= data.name;
  cityTemp=data.main.temp;
  cityHumidity=data.main.humidity;
  cityWind=data.wind.speed;
  cityIcon=data.weather[0].icon;
  //console.log(cityWind);
  console.log(data);
  console.log(cityIcon);
   

  // Create html values in box
var cName = document.querySelector('#cardbodyCity');
var cTemp = document.querySelector('#cardbodyTemp');
var cWind = document.querySelector('#cardbodywind');
var cHumidity = document.querySelector('#cardbodyHumidity');
var cIcon = document.querySelector('#cardbodyIcon');
//cName.document.createElement('h1');
// CITY NAME
cName.innerText = "City: "+ cityName + " " +date.format("MM/DD/YYYY");
// CITY ICON
document.getElementById("cardbodyIcon").setAttribute('src', 'http://openweathermap.org/img/wn/'+ cityIcon +'@2x.png');
// CITY TEMP
cTemp.innerText = "Current Temp: "+ cityTemp + " Fahrenheit";
// CITY WIND
cWind.innerText = "Wind: " + cityWind + " MPH";
// CITY Humidity
cHumidity.innerText = "Humidity: " + cityHumidity;



  });

}

function getWeatherFive(data5){

    var requestUrl5 ='https://api.openweathermap.org/data/2.5/forecast?q=';
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=1324b076d7d8ed0b45bf5b20fdc67fb8', { 
    }) 
  .then(response => {
   return response.json();
  })
  .then(function (data5){
  console.log(data5);
  cityName5= data5.name;
  cityTemp=data5.main.temp;
  cityHumidity=data5.main.humidity;
  cityWind=data5.wind.speed;
  cityIcon=data5.weather[0].icon;

});


}



//getWeather();



searchCity.addEventListener('click', function(){
  getWeather();
  getWeatherFive();

});



// create document.createElement('') for each feild in box

