<script>
    import { getWeatherFrom } from '../services/weather.js';
    import SearchBar from '../components/searchBar.svelte';

    let weatherData;
    // let query = 'Utrecht';

    // Call the function when the component mounts or when the query changes
    async function search(event) {
        weatherData = await getWeatherFrom(event.detail);
    }
</script>

<SearchBar on:search={search} />
{#if weatherData}
    <h1>Weather in {weatherData.location.name}</h1>
    <p>Temperature: {weatherData.current.temp_c}°C</p>
    <p>Feels like: {weatherData.current.feelslike_c}°C</p>
    <p>Humidity: {weatherData.current.humidity}%</p>
    <p>Wind: {weatherData.current.wind_kph} km/h</p>
    <p>Condition: {weatherData.current.condition.text}</p>
    <img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} />
{:else}
    <p>Enter some data...</p>
{/if}

<style>
    h1 {
        color: #353535;
        font-weight: 400;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    p {
        color: #8e8e8e;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
    }
</style>
