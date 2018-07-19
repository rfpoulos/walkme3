export const initialState = {
    currentLocation: null,
    menuOpen: false,
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

const actions = {
    [updateCurrentLocation]: updateCurrentLocationAction,
    [updateUserObject]: updateUserObjectAction,
};

export default actions;