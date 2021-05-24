import React from 'react';

import { RatesStore } from './ratesStore';
import { AccountsStore } from './accountsStore';

const ratesStore = new RatesStore();
const accountsStore = new AccountsStore();


const storesContext = React.createContext({
  accountsStore,
  ratesStore
});

export default storesContext;


