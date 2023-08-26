import { getIcon } from "../../models/fillingWidgets/info";
import { getRandomWallpaper } from "../../models/wallpaperApi"

export const setRandomWallpaper = async (option) => {
    const data = await getRandomWallpaper(option);
    const hits = data.hits;
    const index = Math.floor(Math.random() * hits.length);
    const image = await getIcon(data.hits[index].largeImageURL);
    const wrapper = document.querySelector('.wrapper');
    wrapper.style.backgroundImage = `url('${image.src}')`;
    
}