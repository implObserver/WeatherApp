import { CONSTANTS } from "../constants";
import { weekday } from "../data/weekDays";
import { getDaysForecastWeatherForCity } from "../weatherApi";
import { ForecastDays } from "../widgets";
import { getIcon } from "./info";

export const fillDaysForecast = async (days, city) => {
    try {
        const data = await getDaysForecastWeatherForCity(days, city);
        for (let i = 0; i < (await CONSTANTS).FORECAST_LONG; i++) {
            getDay(data.forecast.forecastday[i].date);
            (await ForecastDays).days[i].querySelector('.name').textContent = await getDay(data.forecast.forecastday[i].date);
            (await ForecastDays).days[i].querySelector('.max').textContent = `${data.forecast.forecastday[i].day.maxtemp_c} \xB0C`;
            (await ForecastDays).days[i].querySelector('.low').textContent = `${data.forecast.forecastday[i].day.mintemp_c} \xB0C`;
            const image = await getIcon(data.forecast.forecastday[i].day.condition.icon);
            (await ForecastDays).days[i].querySelector('.icon').appendChild(image);
        }
        console.log(data.forecast.forecastday[0])
        console.log(data);
    } catch (error) {
        console.log('Error:', error);
    }
}

const getDay = async (promise) => {
    const date = new Date(promise);
    const dayCode = date.getDay();
    const day = weekday[dayCode];
    return day;
}