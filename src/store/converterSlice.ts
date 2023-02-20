import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrencyInterface, StateInterface } from '../models';
import { STORE_NAME } from "../constants";

const initialState: StateInterface = {
    currencies: []
};

const converterSlice = createSlice({
    name: STORE_NAME,
    initialState,
    reducers: {
        currencyFetchSuccess(state: StateInterface, action: PayloadAction<CurrencyInterface[]>) {
            state.currencies = action.payload;
        },

        updateExchangeRate(state: StateInterface, action: PayloadAction<CurrencyInterface>) {
            const index: number = state.currencies.findIndex(
                (el) => el.ccy === action.payload.ccy
            );

            state.currencies[index] = action.payload;
        },
    },
});

export const { currencyFetchSuccess, updateExchangeRate } = converterSlice.actions;
export default converterSlice.reducer;
