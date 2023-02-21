// import { DEFAULT_ALLOWED_PERCENTAGE } from '../constants';
//
//
// export const setDataToLocalStorage = (key: string, value: string): void => {
//   localStorage.setItem(key, value);
// };
//
// export const getDataFromLocalStorage = (key: string): string | null => {
//   return localStorage.getItem(key);
// };
//
// export const calculatePercentages = (
//   n: number,
//   percentages = DEFAULT_ALLOWED_PERCENTAGE
// ): number => {
//   return (n * percentages) / 100;
// };
//

import { Dispatch, SetStateAction } from 'react';
import { DEFAULT_ALLOWED_PERCENTAGE } from '../constants';
import { CurrencyInterface, CurrencyType } from '../models';

export const setDataToLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const getDataFromLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const calculatePercentages = (
    n: number,
    percentages = DEFAULT_ALLOWED_PERCENTAGE
): number => {
  return (n * percentages) / 100;
};

export const currencyExchange = (
    rate: CurrencyInterface | undefined,
    currencyType: string,
    currencyFromValue: string | number,
    setCurrencyToValue: Dispatch<SetStateAction<number>>
) => {
  switch (currencyType) {
    case CurrencyType.BUY: {
      console.log(rate, 'rate');
      if (rate?.buy) {
        setCurrencyToValue(+currencyFromValue * +rate.buy);
      }

      break;
    }
    case CurrencyType.SALE: {
      if (rate?.sale) {
        setCurrencyToValue(+currencyFromValue / +rate.sale);
      }

      break;
    }
  }
};
