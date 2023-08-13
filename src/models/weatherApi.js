const getCurrentWeatherForCity = async (city) => {
    try {
        const apiKey = '6349002fc7d4425ba87132549231008';
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
        const response = await fetch(apiUrl, { mode: 'cors' });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error);
    }
};

export const setCurrentWeatherForCity = async (city) => {
    try {
        const data = await getCurrentWeatherForCity(city);
        const current = data.current;
        const locattion = data.location;
        console.log(current);
        console.log(locattion);
    } catch (error) {
        console.log('Error:', error);
    }
};
