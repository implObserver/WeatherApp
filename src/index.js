import { fillWeatherDetails } from './models/fillingWidgets/details';
import { fillCurrentWeatherData } from './models/fillingWidgets/info';

import './views/styles/main.css';

fillCurrentWeatherData('London');
fillWeatherDetails('London');
