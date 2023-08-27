export const getRandomWallpaper = async (promise) => {
    try {
        const minWidth = 1080;
        const minHeight = 1080;
        const option = await promise;
        const apiKey = '39005979-68c3541db10e6a8ba629c98a6';
        const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${option}&min_width=${minWidth}&min_height=${minHeight}&category=places&image_type=photo&per_page=20`;
        const response = await fetch(apiUrl, { mode: 'cors' });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error);
        alert(error);
    }
};
