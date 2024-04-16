import React, {useReducer} from 'react';
import {diceOptions} from "../../utils/options.ts";
import {SelectField} from "../SelectField/SelectField.tsx";
import {initialState, optionReducer} from "../../reducers/DownColumn.ts";
import {clearLocalStorage} from "../../utils/functions.ts";

const App: React.FC = () => {
    const [state, dispatch] = useReducer(optionReducer, initialState);

    const handleSelectChange = (id: string, value: number | ''):void => {
        dispatch({type: 'replace', id, value });
    }

    return (
        <>
            <SelectField diceOptions={diceOptions} onOptionChange={handleSelectChange} selectedOptions={state}/>
            <button onClick={() => clearLocalStorage(dispatch)}>Очистить хранилище</button>
        </>


    )
}

export default App;