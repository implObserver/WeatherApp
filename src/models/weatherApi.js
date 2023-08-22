export const getCurrentWeatherForCity = async (city) => {
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

export const getDaysForecastWeatherForCity = async (days, city) => {
    const apiKey = '6349002fc7d4425ba87132549231008';
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&days=${days}&q=${city}`;
    const response = await fetch(apiUrl, { mode: 'cors' });
    const data = await response.json();
    console.log(data)
    return data;
};
