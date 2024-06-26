import {DiceType} from "../Types/Types.ts";

const diceOptions: Array<DiceType> = [
    {id: 'One', values: ['', 0, 1, 2, 3, 4, 5]},
    {id: 'Two', values: ['', 0, 2, 4, 6, 8, 10]},
    {id: 'Three', values: ['', 0, 3, 6, 9, 12, 15]},
    {id: 'Four', values: ['', 0, 4, 8, 12, 16, 20]},
    {id: 'Five', values: ['', 0, 5, 10, 15, 20, 25]},
    {id: 'Six', values: ['', 0, 6, 12, 18, 24, 30]}
];

const minMaxDiceOptions: Array<DiceType> = [
    {id: 'minMaxOne', values: ['', 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]},
    {id: 'minMaxTwo', values: ['', 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]},
    {id: 'minMaxThree', values: ['', 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]},
    {id: 'minMaxFour', values: ['', 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]},
];

const comboDiceOptions: Array<DiceType> = [
    {id: 'comboDiceOne', values: ['', 0, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]},
    {id: 'combiDiceTwo', values: ['', 0, 45, 50]},
    {id: 'comboDiceThree', values: ['', 0, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70]},
    {id: 'combiDiceFour', values: ['', 0, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74]},
    {id: 'combiDiceFive', values: ['', 0, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]},
]

export {diceOptions,  minMaxDiceOptions, comboDiceOptions};