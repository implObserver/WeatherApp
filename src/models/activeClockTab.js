export const ClockTabs = (async () => {
    let indexActiveTab = 0;
    const clockTabs = document.querySelectorAll('.tab');
    clockTabs[0].style.backgroundColor = '#000000';

    const activate = async (i) => {
        clockTabs[i].style.backgroundColor = '#000000';
        setIndexActiveTab(i);
    }

    const deactivate = async (i) => {
        clockTabs[i].style.backgroundColor = '#ffffff';
    }

    const activateFollowTab = () => {
        clockTabs[indexActiveTab].style.backgroundColor = '#ffffff';
        incIndexActiveTab();
        clockTabs[indexActiveTab].style.backgroundColor = '#000000';
    }

    const activatePrevTab = () => {
        deactivate(indexActiveTab);
        decIndexActiveTab();
        clockTabs[indexActiveTab].style.backgroundColor = '#000000';
    }

    const incIndexActiveTab = () => {
        indexActiveTab += 1;
        ifMax();
    }

    const decIndexActiveTab = () => {
        indexActiveTab -= 1;
        ifMin();
    }

    const setIndexActiveTab = (val) => {
        indexActiveTab = val;
        ifMax();
    }

    const getIndexActiveTab = () => {
        return indexActiveTab;
    }

    const ifMax = () => {
        if (indexActiveTab >= clockTabs.length) {
            indexActiveTab = 0;
        }
    }

    const ifMin = () => {
        if (indexActiveTab < 0) {
            indexActiveTab = clockTabs.length - 1;
        }
    }

    const getClockTabs = () => {
        return clockTabs;
    }

    return { activate, deactivate, activateFollowTab, activatePrevTab, setIndexActiveTab, getIndexActiveTab, getClockTabs };
})();