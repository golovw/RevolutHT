import React, { useCallback } from 'react';

import { CurrencySelect } from '../currencySelect';

import { isCurrencyValid } from './Account.utils';

import { currencySymbols } from 'constants/currency';

import { Account as AccountI } from 'ducks/Account.duck';

import { Container, Raw, Balance, AmountInput } from './Account.styles';

interface Props {
  isReceiving?: boolean;
  amount: string;
  account: AccountI;
  accounts: AccountI[];
  onAccountChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  onAmountChange: (value: string) => void;
}

export const Account = (props: Props) => {
  const {
    isReceiving,
    amount,
    account: {
      id = '',
      balance,
      currency
    },
    accounts,
    onAccountChange,
    onAmountChange,
  } = props;

  const changeAmount = useCallback(
    ({ target: { value } }) => isCurrencyValid(value, +balance) && onAmountChange(value),
    [onAmountChange, balance]
  );

  const setZeroIfEmpty = useCallback(
    () => { !amount && onAmountChange('0') },
    [amount, onAmountChange]
  );

  const clearZeroAmount = useCallback(
    () => { amount === '0' && onAmountChange('') },
    [amount, onAmountChange]
  );

  return (
    <Container isReceiving={isReceiving}>
      <Raw>
        <CurrencySelect
          value={id}
          accounts={accounts}
          onChange={onAccountChange}
        />

        <AmountInput
          disabled={isReceiving}
          disableUnderline
          value={amount}
          onChange={changeAmount}
          onBlur={setZeroIfEmpty}
          onFocus={clearZeroAmount}
        />
      </Raw>
      <Raw>
        <Balance>Balance: {currencySymbols[currency]}{balance}</Balance>
      </Raw>
    </Container>
  );
};
