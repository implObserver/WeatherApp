import { fillHoursForecast } from "../../models/fillingWidgets/forecast";

export const forButtonHours = async () => {
    const button = document.querySelector('.forecast-hours');
    const click = button.addEventListener('click', () => {
        console.log('w')
        fillHoursForecast('London', 0, 8);
    });
    return { click };
}