import { Action, createStore, Store } from "redux";
import reducer from './reducer';

// 値変更用
export interface IValueChangeState {
    value: number;
}

// すべて基底state
export interface IRootState {
    ValueChange: IValueChangeState;
}

const store: Store<IValueChangeState, Action> = createStore(reducer);
export default store;