const apiKey  = '3ae625da2f7b3301d717217bb3e56358';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search-bar input')
const searchBtn = document.querySelector('.search-bar button')
const weatherIcon = document.querySelector('.weather-icon')
const changeUnit = document.querySelector('.changeUnit')

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
  var data = await response.json();

  document.querySelector('.city').innerHTML = data.name;
  const tempInCelsius = document.querySelector('.temp')
  tempInCelsius.innerHTML = Math.round(data.main.temp) + '°C';

  changeUnit.addEventListener('click', () => {
    if(changeUnit.innerHTML === '°F'){
      tempInCelsius.innerHTML = `${(9/5*(Math.round(data.main.temp)) + 32)}°F`
      changeUnit.innerHTML = '°C'
    }
    else {
      tempInCelsius.innerHTML = Math.round(data.main.temp) + '°C';
      changeUnit.innerHTML = '°F'
    }
  })

  document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

  const time = new Date().getHours()

  if(time > 5 && time < 15) {
    if(data.weather[0].main == 'Clear'){
      weatherIcon.src = 'Images/clear.png'
    }
    else if(data.weather[0].main == 'Clouds') {
      weatherIcon.src = 'Images/clouds.png'
    }
    else if(data.weather[0].main == 'Haze') {
      weatherIcon.src = 'Images/Haze.png'
    }
    else if(data.weather[0].main == 'Drizzles') {
      weatherIcon.src = 'Images/drizzles.png'
    }
    else if(data.weather[0].main == 'Humidity') {
      weatherIcon.src = 'Images/humidity.png'
    }
    else if(data.weather[0].main == 'Mist') {
      weatherIcon.src = 'Images/mist.png'
    }
    else if(data.weather[0].main == 'Rain') {
      weatherIcon.src = 'Images/rain.png'
    }
    else if(data.weather[0].main == 'Snow') {
      weatherIcon.src = 'Images/snow.png'
    }
    else if(data.weather[0].main == 'Wind') {
      weatherIcon.src = 'Images/wind.png'
    }
  }
  else {
    if(data.weather[0].main == 'Clear'){
      weatherIcon.src = 'Images/clearNight.png'
    }
    else if(data.weather[0].main == 'Clouds') {
      weatherIcon.src = 'Images/cloudsNight.png'
    }
    else if(data.weather[0].main == 'Haze') {
      weatherIcon.src = 'Images/hazeNight.png'
      console.log(weatherIcon);
    }
    else if(data.weather[0].main == 'Drizzles') {
      weatherIcon.src = 'Images/drizzlesNight.png'
    }
    else if(data.weather[0].main == 'Humidity') {
      weatherIcon.src = 'Images/humidity.png'
    }
    else if(data.weather[0].main == 'Mist') {
      weatherIcon.src = 'Images/mistNight.png'
    }
    else if(data.weather[0].main == 'Rain') {
      weatherIcon.src = 'Images/rainNight.png'
    }
    else if(data.weather[0].main == 'Snow') {
      weatherIcon.src = 'Images/snowNight.png'
    }
    else if(data.weather[0].main == 'Wind') {
      weatherIcon.src = 'Images/wind.png'
    }
  }
}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
  changeUnit.innerHTML = '°F'
})



