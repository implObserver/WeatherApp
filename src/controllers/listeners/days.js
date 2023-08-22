import { fillDaysForecast } from "../../models/fillingWidgets/forecast";

export const forButtonDays = async () => {
    const button = document.querySelector('.forecast-days');
    const click = button.addEventListener('click', () => {
        console.log('w')
        fillDaysForecast(3, 'London');
    });
    return { click };
};