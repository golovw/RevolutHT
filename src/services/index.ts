import { ApiAdapter } from 'adapters/apiAdapter';

import { RatesService } from 'services/ratesService';
import { AccountService } from 'services/accountService';

const apiAdapter = new ApiAdapter();

const ratesService = new RatesService(apiAdapter);
const accountsService = new AccountService(apiAdapter);

export default {
  ratesService,
  accountsService
};
