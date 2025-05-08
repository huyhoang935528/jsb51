const apiKey = 'b4780cf2c7c8b0f65606994741ba7454'; 

document.getElementById('searchBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value.trim();
  if (city) {
    fetchWeatherByCity(city);
  }
});

document.getElementById('locationBtn').addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      fetchWeatherByLocation(lat, lon);
    }, error => {
      alert('Unable to get location.');
    });
  } else {
    alert('Geolocation not supported.');
  }
});

function fetchWeatherByCity(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetchWeather(url);
}

function fetchWeatherByLocation(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  fetchWeather(url);
}

function fetchWeather(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        document.getElementById('weatherResult').innerHTML = `
          <h5>${data.name}, ${data.sys.country}</h5>
          <p>${data.weather[0].description}</p>
          <p>🌡 Temp: ${data.main.temp}°C</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
          <p>💨 Wind: ${data.wind.speed} m/s</p>
        `;
      } else {
        document.getElementById('weatherResult').innerText = 'City not found!';
      }
    })
    .catch(err => {
      document.getElementById('weatherResult').innerText = 'Error fetching data.';
    });
}
