import { forArrowDown, forArrowUp, forButtonDot } from './controllers/listeners/changer';
import { forButtonDays } from './controllers/listeners/days';
import { forButtonHours } from './controllers/listeners/hours';
import { fillWeatherDetails } from './models/fillingWidgets/details';
import { fillDaysForecast } from './models/fillingWidgets/forecast';
import { fillCurrentWeatherData } from './models/fillingWidgets/info';

import './views/styles/main.css';

forButtonDays().click;
forButtonHours().click;
fillCurrentWeatherData('London');
fillWeatherDetails('London');
fillDaysForecast(3, 'London');
forButtonDot();
forArrowUp();
forArrowDown();