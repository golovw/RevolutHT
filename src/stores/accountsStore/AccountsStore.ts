import { action, makeObservable, observable, runInAction } from 'mobx';

import services from '../../services';

import { Account } from 'ducks/Account.duck';

const {
  accountsService: {
    getAccounts: _getAccounts
  }
} = services;

export class AccountsStore {
  accounts: Account[] = [];

  constructor() {
    makeObservable(this,{
      accounts: observable,
      getAccounts: action.bound,
      makeExchange: action.bound,
    });
  }

  async getAccounts() {
    const { data } = await _getAccounts();

    runInAction(() => {
      this.accounts = data;
    });
  }

  makeExchange(fromId: string, toId: string, amountFrom: number, amountTo:number) {
    this.accounts = this.accounts.map((account: Account) => {
      let balance = +account.balance;

      if (account.id === fromId) {
        balance -= amountFrom;
      }

      if (account.id === toId) {
        balance += amountTo;
      }

      return { ...account, balance: `${balance.toFixed(2)}` }
    });
  }
}
