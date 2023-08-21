import { fillWeatherDetails } from './models/fillingWidgets/details';
import { fillDaysForecast } from './models/fillingWidgets/forecast';
import { fillCurrentWeatherData } from './models/fillingWidgets/info';

import './views/styles/main.css';

fillCurrentWeatherData('London');
fillWeatherDetails('London');
fillDaysForecast(3, 'London');
