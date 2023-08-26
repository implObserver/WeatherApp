import { City } from "../../models/city";
import { viewWeather } from "../../views/nodes/main";
import { daysIsActive } from "./days";

export const forSearchField = async () => {
    const input = document.querySelector('.search-field>input');
    const search = input.addEventListener('keyup', async (e) => {
        e.preventDefault();
        if (e.keyCode === 13) {
            try {
                (await City).setCity(input.value);
                viewWeather((await City).getCity());
                daysIsActive();
            } catch (error) {
                console.log('Error:', error);
            }
        }
    })
    return { search };
}