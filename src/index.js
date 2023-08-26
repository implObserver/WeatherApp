import { City } from './models/city';
import { setListeners } from './models/main';
import { Loader } from './views/animations/pageLoader';
import { viewWeather } from './views/nodes/main';

import './views/styles/main.css';

Loader

setListeners();
let city = (await City).getCity();
viewWeather(city);