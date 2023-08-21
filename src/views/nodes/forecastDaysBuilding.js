import { CONSTANTS } from '../../models/constants';
import { getTemplateNode } from './templates';

export const building = async () => {
    const panel = document.querySelector('.panel');
    for (let i = 0; i < (await CONSTANTS).FORECAST_LONG; i++) {
        const day = await getTemplateNode('.day');
        const temperature = await getTemplateNode('.temperature__for-day');
        day.className = `f day${i}`;
        day.querySelector('.temperature-wrapper').appendChild(temperature);
        panel.appendChild(day);
    }
};
