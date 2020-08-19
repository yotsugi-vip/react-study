import { combineReducers, Reducer } from "redux";
import { IValChangeAction, ValueChangeAction, ValActionType } from "./Action";
import { IRootState, IValueChangeState } from "./store";

// IValueChangeの初期データ
const initChangeValue: IValueChangeState = {
    value: 0
};

// valueChange で発生する actionに対してReduxのstateを返すreducer
const ValueChangeReducer: Reducer<IValueChangeState> = (
    state: IValueChangeState = initChangeValue,
    action: ValueChangeAction
): IValueChangeState => {
    switch (action.type) {
        case ValActionType.VAL_CHANGE:
            const valueChangeAction: IValChangeAction = action;
            return {
                ...state,
                value: state.value
            };
        default:
            return state;
    }
};

const reducer: Reducer<IRootState> = combineReducers({
    ValueChange: ValueChangeReducer
});

export default reducer;