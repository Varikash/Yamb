type Values = (number | '');

export type DiceType = {
    id: string,
    values: Values[];
}

export type SelectFieldProps = {
    diceOptions: DiceType[];
    onOptionChange: (id: string, value: number | '') => void;
    selectedOptions: {[key: string]: (number | '')[]};
}

export type StateType = Record<string, (number | '')[]>;
export type ActionType = { type: 'clear' | 'replace', id?: string, value?: number | '' };