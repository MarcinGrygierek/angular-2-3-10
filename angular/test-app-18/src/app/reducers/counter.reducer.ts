import { createReducer, on } from "@ngrx/store";
import { increment } from "../actions/counter.actions";

export const initialState = {
    value: 1
};

export const counterReducer = createReducer(
    initialState,
    on(increment, state => ({
        ...state,
        value: state.value + 1
    }))
)