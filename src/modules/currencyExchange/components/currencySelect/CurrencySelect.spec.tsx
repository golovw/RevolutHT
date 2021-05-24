import React from 'react';

import { renderWithTheme } from 'helpers/test';

import { CurrencySelect } from './CurrencySelect';

import { accountsMock } from 'services/accountService/__mock__';

describe('CurrencySelect', () => {

  describe('Snapshots', () => {
    it('currency select should match snapshot', () => {
      const component = renderWithTheme(
        <CurrencySelect
          value={accountsMock[0].id}
          accounts={accountsMock}
          onChange={() => {}}
        />
      );

      expect(component).toMatchSnapshot();
    });
  });

});
