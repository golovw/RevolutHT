import React from 'react';
import { cleanup } from "@testing-library/react";

import { renderWithTheme } from 'helpers/test';

import { CurrencyExchange } from './CurrencyExchange';

import { useStores } from 'hooks/useStores';

import { accountsMock } from 'services/accountService/__mock__';
import { ratesMock } from 'services/ratesService/__mock__';

jest.mock('hooks/useStores', () => {
  return {
    useStores: jest.fn(),
  };
});

describe('CurrencyExchange', () => {

  beforeEach(() => {
    jest.useFakeTimers();

    const accountsStore = {
      accounts: accountsMock,
      getAccounts: jest.fn(),
      makeExchange: jest.fn(),
    };

    const ratesStore = {
      rates: ratesMock,
      getRates: jest.fn(),
      setGetRatesIntervalRequest: jest.fn(),
      clearTimers: jest.fn(),
    };

    (useStores as jest.Mock).mockReturnValue({ accountsStore, ratesStore });
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    cleanup();
  });

  describe('Snapshots', () => {
    it('sending account should match snapshot', () => {
      const component = renderWithTheme(
        <CurrencyExchange />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
