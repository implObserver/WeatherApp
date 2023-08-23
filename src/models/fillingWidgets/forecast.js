import { SmoothVisibility } from "../../views/animations/universal";
import { CONSTANTS } from "../constants";
import { weekday } from "../data/weekDays";
import { getDaysForecastWeatherForCity } from "../weatherApi";
import { forecastDays, forecastHours } from "../widgets";
import { getIcon } from "./info";
import { building as forecastDaysBuilding } from '../../views/nodes/forecastDaysBuilding';
import { building as forecastHoursBuilding } from "../../views/nodes/forecastHoursBuilding";

export const fillDaysForecast = async (ofDays, city) => {
    try {
        forecastDaysBuilding();
        const data = await getDaysForecastWeatherForCity(ofDays, city);
        const days = (await forecastDays()).allDays;
        for (let i = 0; i < (await CONSTANTS).FORECAST_LONG; i++) {
            days[i].querySelector('.name').textContent = await getDay(data.forecast.forecastday[i].date);
            days[i].querySelector('.max').textContent = `${data.forecast.forecastday[i].day.maxtemp_c} \xB0C`;
            days[i].querySelector('.low').textContent = `${data.forecast.forecastday[i].day.mintemp_c} \xB0C`;
            const image = await getIcon(data.forecast.forecastday[i].day.condition.icon);
            const imageWrapper = days[i].querySelector('.icon');
            imageWrapper.appendChild(image);
            SmoothVisibility.open(imageWrapper, 0, 1, 400, 'forwards');
        }
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

export const fillHoursForecast = async (city, fHour, lHour) => {
    try {
        forecastHoursBuilding(fHour, lHour);
        const data = await getDaysForecastWeatherForCity(1, city);
        const hours = (await forecastHours()).allHours;
        for (let i = 0; i < 8; i++) {
            const index = i + fHour;
            hours[i].querySelector('.name').textContent = data.forecast.forecastday[0].hour[index].time.split(' ')[1];
            hours[i].querySelector('.temperature-wrapper').textContent = `${data.forecast.forecastday[0].hour[index].temp_c} \xB0C`;
            const image = await getIcon(data.forecast.forecastday[0].hour[index].condition.icon);
            const imageWrapper = hours[i].querySelector('.icon');
            imageWrapper.appendChild(image);
            SmoothVisibility.open(imageWrapper, 0, 1, 400, 'forwards');
        }
    } catch (error) {
        console.log('Error:', error);
    }
}