import React from 'react';

import { renderWithTheme } from 'helpers/test';

import { Account } from './Account';

import { accountsMock } from 'services/accountService/__mock__';

describe('Account', () => {

  describe('Snapshots', () => {
    it('sending account should match snapshot', () => {
      const component = renderWithTheme(
        <Account
          amount={'0'}
          account={accountsMock[0]}
          accounts={accountsMock}
          onAccountChange={() => {}}
          onAmountChange={() => {}}
        />
      );

      expect(component).toMatchSnapshot();
    });

    it('receiving account should match snapshot', () => {
      const component = renderWithTheme(
        <Account
          isReceiving
          amount={'0'}
          account={accountsMock[0]}
          accounts={accountsMock}
          onAccountChange={() => {}}
          onAmountChange={() => {}}
        />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
