import actions from './actions';
import { initialState } from './actions';

let fallback = (state, action) => state;

let reducer = (oldState = initialState, action) => {
    let babyReducer = actions[action.type] || fallback;
    return babyReducer(oldState, action);
};

export default reducer;

