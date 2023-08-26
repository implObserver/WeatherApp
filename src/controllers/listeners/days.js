import { City } from '../../models/city';
import { fillDaysForecast } from '../../models/fillingWidgets/forecast';
import { SmoothVisibility } from '../../views/animations/universal';

export const forButtonDays = async () => {
    const button = document.querySelector('.forecast-days');
    const click = button.addEventListener('click', async () => {
        const changer = document.querySelector('.changer');
        daysIsActive();
        fillDaysForecast(3, (await City).getCity());
        SmoothVisibility.close(changer, 1, 0, 200, 'forwards');
    });
    return { click };
};

export const daysIsActive = async () => {
    const button = document.querySelector('.forecast-days');
    const hours = document.querySelector('.forecast-hours');
    button.classList.add('active');
    hours.classList.remove('active');
}