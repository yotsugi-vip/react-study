import { Action } from "redux";

// reduxのactionの識別子
export enum ValActionType {
    VAL_CHANGE = 'VAL_CHANGE'
}

// Todoを追加するActionとして、Actionを継承したinterfaceを定義
// 追加するPayloadの情報も同時に持つ
export interface IValChangeAction extends Action {
    type: ValActionType.VAL_CHANGE;
    payload: {
        val: number;
    };
}


export type ValueChangeAction = IValChangeAction;
export interface IValueChangeCreator {
    valueChangeAction(value: number): IValChangeAction;
}

class ValueChangeCreator implements IValueChangeCreator {
    public valueChangeAction = (value: number): IValChangeAction => {
        return {
            payload: {
                val: value
            },
            type: ValActionType.VAL_CHANGE
        };
    };
}

export const valueChangeCreator: IValueChangeCreator = new ValueChangeCreator();