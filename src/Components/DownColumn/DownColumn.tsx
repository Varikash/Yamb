import React from 'react';
import {initialState, optionReducer} from "../../reducers/DownColumn.ts";
import {diceOptions} from "../../utils/options.ts";
import Column from "../Column/Column.tsx";

const DownColumn: React.FC = () => {
    return (
        <>
            <Column initialState={initialState} optionReducer={optionReducer} diceOptions={diceOptions}/>
        </>
    )
}

export default DownColumn