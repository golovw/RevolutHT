import { AccountsStore, AccountsStoreI } from './AccountsStore';

import { Account } from 'ducks/Account.duck';

describe('AccountsStore', () => {

  let accountStore: AccountsStoreI;

  beforeEach(() => {
    accountStore = new AccountsStore();
  });

  it('should create instance', () => {
    expect(accountStore).toBeInstanceOf(AccountsStore);
    expect(accountStore.accounts).toEqual([]);
  });

  it('should update accounts', () => {
    accountStore.getAccounts().then(() => {
      expect(accountStore.accounts.length).toBeGreaterThan(0);
    });
  });

  it('should make exchange', () => {
    accountStore.getAccounts().then(() => {
      const [sending, receiving] = accountStore.accounts;

      const amountFrom = 1;
      const amountTo = 2;

      accountStore.makeExchange(sending.id, receiving.id, amountFrom, amountTo);

      const sendingNew = accountStore.accounts.find(({ id }: Account) => id === sending.id)
      const receivingNew = accountStore.accounts.find(({ id }: Account) => id === receiving.id)

      // @ts-ignore
      expect(+sending.balance - amountFrom).toEqual(+sendingNew.balance);
      // @ts-ignore
      expect(+receiving.balance + amountTo).toEqual(+receivingNew.balance);
    });
  });
});
