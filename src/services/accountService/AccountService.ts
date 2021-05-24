import { accountsMock } from './__mock__';

import { ApiAdapterI } from 'adapters/apiAdapter';

export class AccountService {
  apiAdapter;

  constructor(apiAdapter: ApiAdapterI) {
    this.apiAdapter = apiAdapter;
  }

  getAccounts = async () => {
    return { data: accountsMock };
  }
}
