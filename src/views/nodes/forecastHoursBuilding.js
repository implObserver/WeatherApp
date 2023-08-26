import { removeChilds } from '../../helper/tools';
import { getTemplateNode } from './templates';

export const building = async (fHour, lHour) => {
    const panel = document.querySelector('.panel');
    removeChilds(panel);
    for (let i = fHour; i < lHour; i++) {
        const hour = await getTemplateNode('.hour');
        hour.className = `f h hour${i} background`;
        panel.appendChild(hour);
    }
};
