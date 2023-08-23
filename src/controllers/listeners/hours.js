import { fillHoursForecast } from "../../models/fillingWidgets/forecast";
import { SmoothVisibility } from "../../views/animations/universal";

export const forButtonHours = async () => {
    const button = document.querySelector('.forecast-hours');
    const click = button.addEventListener('click', () => {
        const changer = document.querySelector('.changer');
        fillHoursForecast('London', 0, 8);
        SmoothVisibility.open(changer, 0, 1, 200, 'forwards');

    });
    return { click };
}