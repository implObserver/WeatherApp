import { forArrowDown, forArrowUp, forButtonDot } from "../controllers/listeners/changer";
import { forButtonDays } from "../controllers/listeners/days";
import { forButtonHours } from "../controllers/listeners/hours";
import { forSearchField } from "../controllers/listeners/search";

export const setListeners = async () => {
    forSearchField().search;
    forButtonDays().click;
    forButtonHours().click;
    forButtonDot();
    forArrowUp();
    forArrowDown();
}