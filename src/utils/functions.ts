import React from "react";
import {ActionType, StateType} from "../Types/Types.ts";

export function saveToLocalStorage(state: StateType):void {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.warn(e);
    }
}

export function loadFromLocalStorage() {
    try {
        const serializedState: string | null = localStorage.getItem('state');
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