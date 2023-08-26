import { fillWeatherDetails } from "../../models/fillingWidgets/details";
import { fillDaysForecast } from "../../models/fillingWidgets/forecast";
import { fillCurrentWeatherData } from "../../models/fillingWidgets/info";

export const viewWeather = async (city) => {
    fillCurrentWeatherData(city);
    fillWeatherDetails(city);
    fillDaysForecast(3, city);
}