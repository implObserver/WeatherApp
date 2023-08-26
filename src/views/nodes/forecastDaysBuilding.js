import { removeChilds } from '../../helper/tools';
import { CONSTANTS } from '../../models/constants';
import { getTemplateNode } from './templates';

export const building = async () => {
    const panel = document.querySelector('.panel');
    removeChilds(panel);
    for (let i = 0; i < (await CONSTANTS).FORECAST_LONG; i++) {
        console.log('w0w');
        const day = await getTemplateNode('.day');
        const temperature = await getTemplateNode('.temperature__for-day');
        day.className = `f d day${i} background`;
        day.querySelector('.temperature-wrapper').appendChild(temperature);
        panel.appendChild(day);
    }
};
