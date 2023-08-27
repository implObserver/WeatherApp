import { removeChilds } from '../../helper/tools';
import { setRandomWallpaper } from '../../views/nodes/wrapperBackground';
import { States } from '../states';
import { getCurrentWeatherForCity } from '../weatherApi';
import { Info } from '../widgets';

export const fillCurrentWeatherData = async (city) => {
    try {
        const data = await getCurrentWeatherForCity(city);
        const date = await getDate(data.current.last_updated_epoch);
        const time = await getTime(data.location.localtime);
        const image = await getIcon(data.current.condition.icon);
        Info.description.textContent = data.current.condition.text;
        Info.city.textContent = data.location.name;
        Info.date.textContent = date;
        Info.time.textContent = time;
        Info.temperature.textContent = `${data.current.temp_c} \xB0C`;
        removeChilds(Info.icon);
        Info.icon.appendChild(image);
        setRandomWallpaper(data.current.condition.text.replaceAll(' ', '_'));
    } catch (error) {
        alert(
            'Локация не найдена, убедитесь, что название города написано правильно',
        );
    }
};

export const getIcon = async (promise) => {
    let url = await promise;
    const image = new Image();
    image.src = url;
    return image;
};

const getDate = async (promise) => {
    const utcSeconds = await promise;
    let date = new Date(0);
    date.setUTCSeconds(utcSeconds);
    const result = new Intl.DateTimeFormat('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: '2-digit',
        timeZone: 'Australia/Sydney',
    }).format(date);
    return result;
};

const getTime = async (promise) => {
    const date = await promise;
    const time = await formatAMPM(date.split(' ')[1]);
    return time;
};

const formatAMPM = async (strTime) => {
    let time = strTime.split(':');
    var hours = time[0];
    var minutes = time[1];
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var result = hours + ':' + minutes + ' ' + ampm;
    return result;
};
