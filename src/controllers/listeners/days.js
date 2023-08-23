import { fillDaysForecast } from "../../models/fillingWidgets/forecast";
import { SmoothVisibility } from "../../views/animations/universal";

export const forButtonDays = async () => {
    const button = document.querySelector('.forecast-days');
    const click = button.addEventListener('click', () => {
        const changer = document.querySelector('.changer');
        fillDaysForecast(3, 'London');
        SmoothVisibility.close(changer, 1, 0, 200, 'forwards');
    });
    return { click };
};