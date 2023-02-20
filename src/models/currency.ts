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