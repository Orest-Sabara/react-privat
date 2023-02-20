import { CurrencyInterface } from "./currency";

export interface StateInterface {
  currencies: CurrencyInterface[];
}

export type OutsideClickCallbackType = () => void;
