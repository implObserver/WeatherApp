import { building as detailsBuilding } from '../views/nodes/detailsBuilding';
import { building as forecastDaysBuilding } from '../views/nodes/forecastDaysBuilding';

export const Info = (() => {
    const prototype = document.querySelector('.info');
    const description = document.querySelector('.description > span');
    const city = document.querySelector('.city > span');
    const date = document.querySelector('.date > span');
    const time = document.querySelector('.time > span');
    const temperature = document.querySelector('.temperature-wrapper > span');
    const icon = document.querySelector('.icon-wrapper');
    return { prototype, description, city, date, time, temperature, icon };
})();

export const Details = (async () => {
    await detailsBuilding();
    const feelsLike = document.querySelector('.feels-like>.data>.value');
    const humidity = document.querySelector('.humidity>.data>.value');
    const windSpeed = document.querySelector('.wind-speed>.data>.value');
    return { feelsLike, humidity, windSpeed };
})();

export const ForecastDays = (async () => {
    await forecastDaysBuilding();
    const days = Array.from(document.querySelectorAll('.f'));
    return { days };
})();
