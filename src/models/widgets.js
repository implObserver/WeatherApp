import { building } from '../views/nodes/detailsBuilding';

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
    await building();
    const feelsLike = document.querySelector('.feels-like>.data>.value');
    const humidity = document.querySelector('.humidity>.data>.value');
    const windSpeed = document.querySelector('.wind-speed>.data>.value');
    return { feelsLike, humidity, windSpeed };
})();
