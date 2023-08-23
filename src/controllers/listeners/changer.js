import { ClockTabs } from "../../models/activeClockTab";
import { fillHoursForecast } from "../../models/fillingWidgets/forecast";
import * as hoursJSON from '../../models/JSON/hours.json';

const hours = hoursJSON.default;

export const forButtonDot = async () => {
    const buttons = document.querySelectorAll('.tab');
    for (let button of buttons) {
        button.addEventListener('click', async () => {
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i] === button) {
                    setHoursForecast(i);
                    (await ClockTabs).activate(i);

                } else {
                    (await ClockTabs).deactivate(i);

                }
            }
        })
    }
};

export const forArrowUp = async () => {
    const button = document.querySelector('.up');
    button.addEventListener('click', async () => {
        (await ClockTabs).activateFollowTab();
        const i = (await ClockTabs).getIndexActiveTab();
        setHoursForecast(i);
    });
};

export const forArrowDown = async () => {
    const button = document.querySelector('.down');
    button.addEventListener('click', async () => {
        (await ClockTabs).activatePrevTab();
        const i = (await ClockTabs).getIndexActiveTab();
        setHoursForecast(i);
    });
};

const setHoursForecast = async (i) => {
    const fHour = hours[i].hours;
    const lHour = fHour + 8;
    fillHoursForecast('London', fHour, lHour);
}