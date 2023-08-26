import { SmoothVisibility } from "./universal";

export const Loader = (async () => {
    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            SmoothVisibility.open(document.body, 0, 1, 1000, 'forwards');
        }, 1000);
    });
})();