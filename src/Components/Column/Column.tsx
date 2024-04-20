import React, {useReducer} from 'react';
import {SelectField} from "../SelectField/SelectField.tsx";
import TotalSpan from "../TotalSpan/TotalSpan.tsx";
import Style from './Column.module.css'
import {ActionType, DiceType, StateType} from "../../Types/Types.ts";

type SimpleColumnProps = {
    initialState: StateType;
    optionReducer: (state: StateType, action: ActionType) => StateType;
    diceOptions: DiceType[];
}

const Column: React.FC<SimpleColumnProps> = ({ initialState, optionReducer, diceOptions }) => {
    const [state, dispatch] = useReducer(optionReducer, initialState);

    const handleSelectChange = (id: string, value: number | ''): void => {
        dispatch({type: 'replace', id, value});
    }

    let total = 0;
    let allValuesAreNumbers = true

    for (const key in state) {
        if (state[key][0] === undefined || state[key][0] === null || typeof state[key][0] === 'string') {
            allValuesAreNumbers = false;
            break;
        } else {
            total += Number(state[key][0]);
        }
    }

    return (
        <div className={Style.container}>
            <SelectField diceOptions={diceOptions} onOptionChange={handleSelectChange} selectedOptions={state}/>
            <TotalSpan total={allValuesAreNumbers ? total : null}/>
        </div>
    )
}

export default Column;