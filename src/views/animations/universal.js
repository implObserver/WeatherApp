import { Animations } from "./animations";

export const SmoothVisibility = (() => {
    const close = (e, op1, op2, dur, fill) => {
        return Animations.opacity(e, op1, op2, dur, fill).finished.then(() => {
            e.style.visibility = 'hidden';
        });
    }
    const open = (e, op1, op2, dur, fill) => {
        e.style.visibility = 'visible';
        return Animations.opacity(e, op1, op2, dur, fill);
    }
    return { open, close };
})();