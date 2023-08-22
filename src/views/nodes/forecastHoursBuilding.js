import { removeChilds } from '../../helper/tools';
import { getTemplateNode } from './templates';

export const building = async (fHour, lHour) => {
    const panel = document.querySelector('.panel');
    removeChilds(panel);
    for (let i = fHour; i < lHour; i++) {
        const hour = await getTemplateNode('.hour');
        console.log(hour)
        hour.className = `f h hour${i}`;
        panel.appendChild(hour);
    }
};