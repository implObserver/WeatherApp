import { getIcon } from '../../models/fillingWidgets/info';
import { getRandomWallpaper } from '../../models/wallpaperApi';

let url;

export const setRandomWallpaper = async (option) => {
    try {
        const data = await getRandomWallpaper(option);
        const hits = data.hits;
        const index = Math.floor(Math.random() * hits.length);
        const image = await getIcon(data.hits[index].largeImageURL);
        url = image.src;
        testImage(url);
    } catch (error) {
        console.log('Error:', error);
    }
};


const testImage = async (URL) => {
    var tester = new Image();
    tester.onload = imageFound;
    tester.onerror = imageNotFound;
    tester.src = URL;
}

const imageFound = async () => {
    setWallpaper();
}

const imageNotFound = async () => {
    setDefaultWallpaper();
}

const setDefaultWallpaper = async () => {
    const wrapper = document.querySelector('.wrapper');
    const wallpaper = new Image();
    wallpaper.src = require(`../images/default.jpg`);
    wrapper.style.backgroundImage = `url('${wallpaper.src}')`;
}

const setWallpaper = async () => {
    const wrapper = document.querySelector('.wrapper');
    wrapper.style.backgroundImage = `url('${url}')`;
}