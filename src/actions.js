export const initialState = {
    currentLocation: '',
}

const UPDATE_CURRENT_LOCATION = "UPDATE_CURRENT_LOCATION";
export let updateCurrentLocation = (payload) => ({type: UPDATE_CURRENT_LOCATION, payload});
let updateCurrentLocationAction = (state, action) => {
    return ({ ...state, currentLocation: action.payload });
}
updateCurrentLocation.toString = () => UPDATE_CURRENT_LOCATION;

let reducerHandlers = {
    [updateCurrentLocation]: updateCurrentLocationAction,
};

export default reducerHandlers;