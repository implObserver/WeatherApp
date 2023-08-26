export const ClockTabs = (async () => {
    let indexActiveTab = 0;
    const clockTabs = document.querySelectorAll('.tab');
    clockTabs[0].style.backgroundColor = '#1d89e1';

    const activate = async (i) => {
        clockTabs[i].style.backgroundColor = '#1d89e1';
        setIndexActiveTab(i);
    };

    const deactivate = async (i) => {
        clockTabs[i].style.backgroundColor = '#ffffff';
    };

    const activateFollowTab = () => {
        deactivate(indexActiveTab);
        incIndexActiveTab();
        activate(indexActiveTab);
    };

    const activatePrevTab = () => {
        deactivate(indexActiveTab);
        decIndexActiveTab();
        activate(indexActiveTab);
    };

    const incIndexActiveTab = () => {
        indexActiveTab += 1;
        ifMax();
    };

    const decIndexActiveTab = () => {
        indexActiveTab -= 1;
        ifMin();
    };

    const setIndexActiveTab = (val) => {
        indexActiveTab = val;
        ifMax();
    };

    const getIndexActiveTab = () => {
        return indexActiveTab;
    };

    const ifMax = () => {
        if (indexActiveTab >= clockTabs.length) {
            indexActiveTab = 0;
        }
    };

    const ifMin = () => {
        if (indexActiveTab < 0) {
            indexActiveTab = clockTabs.length - 1;
        }
    };

    const getClockTabs = () => {
        return clockTabs;
    };

    return {
        activate,
        deactivate,
        activateFollowTab,
        activatePrevTab,
        setIndexActiveTab,
        getIndexActiveTab,
        getClockTabs,
    };
})();
