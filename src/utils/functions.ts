import React from "react";
import {ActionType, StateType} from "../Types/Types.ts";

export function saveToLocalStorage(state: StateType, key: string):void {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch (e) {
        console.warn(e);
    }
}

export function loadFromLocalStorage(key: string) {
    try {
        const serializedState: string | null = localStorage.getItem(key);
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

export function clearLocalStorage(dispatch: React.Dispatch<ActionType>):void {
    try {
        localStorage.clear();
        dispatch({type: 'clear'});
    } catch (e) {
        console.warn(e);
    }
}