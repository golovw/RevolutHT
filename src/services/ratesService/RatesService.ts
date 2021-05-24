import config from 'config';

import { ApiAdapterI } from 'adapters/apiAdapter';

const {
  api: {
    rates: {
      domain,
      path,
      appId,
      appIdParam,
    },
  },
} = config;

export class RatesService {
  apiAdapter;

  constructor(apiAdapter: ApiAdapterI) {
    this.apiAdapter = apiAdapter;
  }

  getRates = async () => {
    try {
      const { data } = await this.apiAdapter.get(`${domain}${path}`, { [appIdParam]: appId });
      return data;
    } catch(e) {
      console.error(e);
    }
  }

  getRatesRecursively = async () => {
    try {
      const { data } = await this.apiAdapter.get(`${domain}${path}`, { [appIdParam]: appId });
      return data;
    } catch(e) {
      console.error(e);
    }
  }
}
