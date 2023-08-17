import { getCurrentWeatherForCity } from '../weatherApi';
import { Details } from '../widgets';

export const fillWeatherDetails = async (city) => {
    try {
        const data = await getCurrentWeatherForCity(city);
        (
            await Details
        ).feelsLike.textContent = `${data.current.feelslike_c} \xB0C`;
        (await Details).humidity.textContent = `${data.current.humidity} %`;
        (await Details).windSpeed.textContent = `${data.current.wind_kph} km/h`;
    } catch (error) {
        console.log('Error:', error);
    }
};
