import React from "react";
import Style from './SelectField.module.css'
import {DiceType} from "../../Types/Types.ts";
import {SelectFieldProps} from "../../Types/Types.ts";


const SelectField: React.FC<SelectFieldProps> = ({diceOptions, onOptionChange, selectedOptions}) => {
    return(
        <div className={Style.container}>
            {diceOptions.map((diceOption: DiceType, index: number) => {
                return (
                    <select
                        key={`${diceOption.id}-${index}`}
                        className={Style.select}
                        onChange={(e) => onOptionChange(diceOption.id, Number(e.target.value))}
                        value={selectedOptions[diceOption.id][0] || ""}
                    >
                        {diceOption.values.map((value: number | "", index: number) => {
                            return (
                                <option key={index} value={value}>
                                    {value === 0 ? "❌": value}
                                </option>
                            )
                        })}
                    </select>
                )
            })}
        </div>
    )
}

export { SelectField };