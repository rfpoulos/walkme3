export const initialState = {
    currentLocation: null,
    menuOpen: false,
    userObject: null,
}

const UPDATE_CURRENT_LOCATION = "UPDATE_CURRENT_LOCATION";
export let updateCurrentLocation = (payload) => ({type: UPDATE_CURRENT_LOCATION, payload});
let updateCurrentLocationAction = (state, action) => {
    return ({ ...state, currentLocation: action.payload });
}
updateCurrentLocation.toString = () => UPDATE_CURRENT_LOCATION;

const UPDATE_MENU_OPEN = "UPDATE_MENU_OPEN";
export let updateMenuOpen = (payload) => ({type: UPDATE_MENU_OPEN, payload});
let updateMenuOpenAction = (state, action) => {
    return ({ ...state, menuOpen: action.payload });
}
updateMenuOpen.toString = () => UPDATE_MENU_OPEN;

let reducerHandlers = {
    [updateCurrentLocation]: updateCurrentLocationAction,
    [updateMenuOpen]: updateMenuOpenAction,
};

export default reducerHandlers;