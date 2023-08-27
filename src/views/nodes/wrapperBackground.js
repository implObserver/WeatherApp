import { getIcon } from '../../models/fillingWidgets/info';
import { getRandomWallpaper } from '../../models/wallpaperApi';

export const setRandomWallpaper = async (option) => {
    try {
        const data = await getRandomWallpaper(option);
        const hits = data.hits;
        const index = Math.floor(Math.random() * hits.length);
        const image = await getIcon(data.hits[index].largeImageURL);
        testImage(image.src);
    } catch (error) {
        console.log('Error:', error);
        alert(error);
    }
};


function testImage(URL) {
    var tester = new Image();
    tester.onload = imageFound(URL);
    tester.onerror = imageNotFound;
    tester.src = URL;
}

function imageFound(URL) {
    const wrapper = document.querySelector('.wrapper');
    wrapper.style.backgroundImage = `url('${URL}')`;
}

function imageNotFound() {
    const wrapper = document.querySelector('.wrapper');
    const wallpaper = new Image();
    wallpaper.src = require(`../images/default.jpg`);
    wrapper.style.backgroundImage = `url('${wallpaper.src}')`;
}