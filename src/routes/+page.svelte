<script>
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Buenos%20aires';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3f06335a07msh558b0cc534e5a5fp1bf89ejsn709cb99b4550',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        },
    };

    // Declare a variable to store the weather data
    let weatherData;

    // Fetch the weather data and store it in the weatherData variable
    fetch(url, options)
        .then((response) => response.json())
        .then((response) => {
            weatherData = response;
        })
        .catch((error) => console.error('Error:', error));
</script>

{#if weatherData}
    <h1>Weather in {weatherData.location.name}</h1>
    <p>Temperature: {weatherData.current.temp_c}°C</p>
    <p>Feels like: {weatherData.current.feelslike_c}°C</p>
    <p>Humidity: {weatherData.current.humidity}%</p>
    <p>Wind: {weatherData.current.wind_kph} km/h</p>
    <p>Condition: {weatherData.current.condition.text}</p>
    <img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} />
{:else}
    <p>Loading weather data...</p>
{/if}

<style>
    h1 {
        color: #ff3e00;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>
