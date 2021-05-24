import { currencySymbols } from 'constants/currency';

export const getRateLabel = (fromCurrency: string, toCurrency: string, toAmount: number) => (
  `${currencySymbols[fromCurrency]}1 = ${currencySymbols[toCurrency]}${toAmount.toFixed(2)}`
);
