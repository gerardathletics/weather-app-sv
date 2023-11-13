const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3f06335a07msh558b0cc534e5a5fp1bf89ejsn709cb99b4550',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
};

export async function getWeatherFrom(query) {
    try {
        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}
