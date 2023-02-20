import { Dispatch } from "redux";

import { currencyFetchSuccess } from '../store/converterSlice';
import { CurrencyInterface } from "../models";
import { getCurrencies } from "../services";
import { useAppDispatch } from './index';

export const useGetCurrency = () => {
    const dispatch: Dispatch = useAppDispatch();

    const getCurrency = async (): Promise<void> => {
        const axiosResponse = await getCurrencies();

        const currencies: CurrencyInterface[] = axiosResponse.data;

        dispatch(currencyFetchSuccess(currencies));
    };

    return { getCurrency };
};
