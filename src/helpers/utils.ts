import { DEFAULT_ALLOWED_PERCENTAGE } from '../constants';


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

