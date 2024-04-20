import React from 'react';
import {initialState, optionReducer} from "../../reducers/UpColumn.ts";
import {diceOptions} from "../../utils/options.ts";
import Column from "../Column/Column.tsx";

const UpColumn: React.FC = () => {
    return (
        <>
            <Column initialState={initialState} optionReducer={optionReducer} diceOptions={diceOptions}/>
        </>
    )
}

export default UpColumn