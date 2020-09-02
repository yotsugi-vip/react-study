import { combineReducers, AnyAction } from "redux";
import { PUSH_COLORS } from "./action";


const initialState = {
    colors: [""]
};

export function colors(state = initialState, action: AnyAction) {
    switch (action.type) {
        case PUSH_COLORS:
            return Object.assign({}, state, {
                colors: action.payload
            });

        default:
            return state;
    }
}