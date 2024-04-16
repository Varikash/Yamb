// В файле src/reducers/DownColumn.ts
import {diceOptions} from "../utils/options.ts";
import {StateType, ActionType} from "../Types/Types.ts";
import {loadFromLocalStorage, saveToLocalStorage} from "../utils/functions.ts";

const persistedState = loadFromLocalStorage();
export const initialState: StateType = persistedState? persistedState : diceOptions.reduce((acc: StateType, diceOption) => {
    acc[diceOption.id] = [];
    return acc;
}, {});

export const optionReducer = (state: StateType = initialState, action: ActionType): StateType => {
    let newState;
    switch (action.type) {
        case 'replace':
            if (action.id !== undefined && action.value !== undefined) {
                newState = {...state, [action.id]: [action.value]};
            } else {
                throw new Error("action.id or action.value is undefined");
            }
            break;
        case 'clear':
            newState = diceOptions.reduce((acc: StateType, diceOption) => {
                acc[diceOption.id] = [];
                return acc;
            }, {});
            break;
        default:
            return state;
    }

    saveToLocalStorage(newState);
    return newState;
}