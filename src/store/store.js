import { configureStore, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        incremented: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { incremented } = counterSlice.actions;

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});
