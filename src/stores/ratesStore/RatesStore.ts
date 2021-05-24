import { observable, action, makeObservable, runInAction } from 'mobx';

import services from 'services';

import config from 'config';

const {
  ratesService: {
    getRates: _getRates
  }
} = services;

const {
  api: {
    rates: {
      refreshInterval: ratesRefreshInterval
    }
  }
} = config;


interface Rates {
  [index: string]: number;
}

export class RatesStore {
  rates: Rates = {};

  ratesTimeout?: ReturnType<typeof setTimeout>;

  constructor() {
    makeObservable(this,{
      rates: observable,
      getRates: action.bound,
      setGetRatesIntervalRequest: action.bound,
      clearTimers: action.bound,
    });
  }

  async getRates() {
    try {
      const { rates } = await _getRates();

      runInAction(() => {
        this.rates = rates;
      });
    } catch (e) {
      console.error(e);
    }
  }

  setGetRatesIntervalRequest() {
    this.ratesTimeout && clearTimeout(this.ratesTimeout);
    this.getRates().then(() => this.ratesTimeout = setTimeout(this.setGetRatesIntervalRequest, ratesRefreshInterval));
  }

  clearTimers() {
    // @ts-ignore
    clearTimeout(this.ratesTimeout);
  }
}
