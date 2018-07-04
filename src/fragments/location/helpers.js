let success = (pos, updateCurrentLocation) => {
    let crd = pos.coords;
    updateCurrentLocation({ lat: crd.latitude, long: crd.longitude })
}

export default {
    success,
}