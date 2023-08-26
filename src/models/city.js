export const City = (async () => {
    let city = 'London';
    const setCity = (str) => {
        city = str;
    }
    const getCity = () => {
        return city;
    }

    return { getCity, setCity };
})()