// export enum CurrencyType {
//   SALE = 'sale',
//   BUY = 'buy',
// }
//
// export interface CurrencyInterface {
//   ccy: string;
//   sale: string;
//   base_ccy: string;
//   buy: string;
// }
//
// export interface ExchangeRateItemInterface {
//   value: CurrencyInterface;
//   type: CurrencyType;
// }
//
// export interface ConvertorPropsInterface {
//   currencies: CurrencyInterface[];
// }

import { SelectChangeEvent, SelectProps } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

export enum CurrencyType {
  SALE = 'sale',
  BUY = 'buy',
}

export interface CurrencyInterface {
  ccy: string;
  sale: string;
  base_ccy: string;
  buy: string;
}

export interface ExchangeRateItemInterface {
  value: CurrencyInterface;
  type: CurrencyType;
}

export interface ConvertorPropsInterface {
  currencies: CurrencyInterface[];
}

export interface IFrom {
  currencyFromType: string;
  setCurrencyFromType: Dispatch<SetStateAction<string>>;
  currencies: CurrencyInterface[];
}
export interface IToCurrency {
  currencyToType: string;
  onChangeCurrencyToType: (event: SelectChangeEvent<string>) => void;
  currencies: CurrencyInterface[];
}