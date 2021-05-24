import { CURRENCY_REGEX_CHANGE } from './Accounts.constants';

export const isCurrencyValid = (value: string, balance: number) => (
  !value || (CURRENCY_REGEX_CHANGE.test(value) && +value <= balance)
);

