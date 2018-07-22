export const initialState = {
    currentLocation: {lat: null, lng: null},
    userObject: null,
    isOnline: true,
}

const UPDATE_CURRENT_LOCATION = "UPDATE_CURRENT_LOCATION";
export let updateCurrentLocation = (payload) => ({type: UPDATE_CURRENT_LOCATION, payload});
let updateCurrentLocationAction = (state, action) => {
    return ({ ...state, currentLocation: action.payload });
}
updateCurrentLocation.toString = () => UPDATE_CURRENT_LOCATION;

const UPDATE_USER_OBJECT = "UPDATE_USER_OBJECT";
export let updateUserObject = (payload) => ({type: UPDATE_USER_OBJECT, payload});
let updateUserObjectAction = (state, action) => {
    return ({ ...state, userObject: action.payload });
}
updateUserObject.toString = () => UPDATE_USER_OBJECT;

const RESET_STATE = "RESET_STATE";
export let resetState = () => ({type: RESET_STATE});
let resetStateAction = (state, action) => {
    return (initialState);
}
resetState.toString = () => RESET_STATE;

const actions = {
    [updateCurrentLocation]: updateCurrentLocationAction,
    [updateUserObject]: updateUserObjectAction,
    [resetState]: resetStateAction,
};

export default actions;