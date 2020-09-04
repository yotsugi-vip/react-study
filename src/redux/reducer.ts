import { combineReducers, AnyAction, compose } from "redux";
import { PUSH_COLORS } from "./action";


const initialState = {
    colors: ["inirialize"]
};

export function colors(state = initialState, action: AnyAction) {
    switch (action.type) {
        case PUSH_COLORS:
            console.log(action);
            return Object.assign({}, state, {
                colors: action.payload
            });

        default:
            return state;
    }
}