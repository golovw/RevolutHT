import React, { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react';

import { useStores} from 'hooks/useStores';

import { Account } from './components/account';

import { convert } from 'utils/currency';
import { getRateLabel } from './CurrencyExchange.utils';

import { Account as AccountI } from 'ducks/Account.duck';

import { emptyAccount } from "./CurrencyExchange.constants";

import {
  Container,
  AccountScope,
  AccountScopeGrayed,
  Rate,
  TransactionButton,
} from './CurrencyExchange.styles';

export const CurrencyExchange = observer(() => {
  const {
    accountsStore: {
      accounts,
      getAccounts,
      makeExchange
    },
    ratesStore: {
      rates,
      setGetRatesIntervalRequest,
      clearTimers
    }
  } = useStores();

  useEffect(() => {
    getAccounts();
    setGetRatesIntervalRequest();

    return () => clearTimers();
  }, []);

  const [fromAmount, setFromAmount] = useState('0');
  const [toAmount, setToAmount] = useState('0');
  const [fromAccount, setFromAccount] = useState<AccountI>(emptyAccount);
  const [toAccount, setToAccount] = useState<AccountI>(emptyAccount);

  const resolveCurrencyDuplicates = (
    from: AccountI,
    to: AccountI,
    accounts: AccountI[],
    set: (account: AccountI) => void
  ) => {
    if (from && to && from.id && from.id === to.id) {
      const newAccount = accounts.find(({ id }: AccountI) => id !== from.id);
      newAccount && set(newAccount);
    }
  };

  useEffect(() => {
    const convertedValue = convert(rates[fromAccount.currency], rates[toAccount.currency], +fromAmount);
    const formattedValue = convertedValue === 0 ? convertedValue : convertedValue.toFixed(2)
    setToAmount(`${formattedValue}`);
  }, [fromAmount, fromAccount, toAccount, setToAmount]);

  useEffect(() => {
    if (accounts.length) {
      setFromAccount(accounts[0]);
      setToAccount(accounts[1]);
    }
  }, [accounts, setFromAccount, setToAccount]);

  useEffect(() => {
    resolveCurrencyDuplicates(fromAccount, toAccount, accounts, setToAccount);
  }, [fromAccount]);

  useEffect(() => {
    resolveCurrencyDuplicates(fromAccount, toAccount, accounts, setFromAccount);
  }, [toAccount]);

  const getAccountChangeHandler = (handler: (account: AccountI) => void) => {
    return ({ target: { value } }: React.ChangeEvent<{ value: unknown }>) => {
      const newAccount = accounts.find(({ id }: AccountI) => id === value);
      newAccount && handler(newAccount);
    };
  };

  const exchange = useCallback(() => {
    makeExchange(fromAccount.id, toAccount.id, +fromAmount, +toAmount);
    setFromAmount('0');
    setToAmount('0');
  }, [fromAccount, toAccount, fromAmount, toAmount, makeExchange, setFromAmount, setToAmount]);

  return (
    <Container>
      <AccountScope>
        <Account
          amount={fromAmount}
          account={fromAccount}
          accounts={accounts}
          onAccountChange={getAccountChangeHandler(setFromAccount)}
          onAmountChange={setFromAmount}
        />
      </AccountScope>

      <Rate
        label={
          getRateLabel(
            fromAccount.currency,
            toAccount.currency,
            convert(rates[ fromAccount.currency],
              rates[toAccount.currency],
              1
            )
          )
        }
        variant="outlined"
      />

      <AccountScopeGrayed>
        <Account
          isReceiving
          amount={toAmount}
          account={toAccount}
          accounts={accounts}
          onAccountChange={getAccountChangeHandler(setToAccount)}
          onAmountChange={setToAmount}
        />

        <TransactionButton
          variant="contained"
          color="primary"
          onClick={exchange}
        >
          Exchange
        </TransactionButton>
      </AccountScopeGrayed>
    </Container>
  );
});
