export const States = (async () => {
    let vpnStatus = false;
    const setVpnStatus = (val) => {
        console.log(val)
        vpnStatus = val;
    }
    const isVpn = () => {
        return vpnStatus;
    }

    return { setVpnStatus, isVpn };
})()