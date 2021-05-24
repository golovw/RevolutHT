const base = {
  api: {
    rates: {
      domain: 'https://openexchangerates.org',
      path: '/api/latest.json',
      appId: 'd04ca3ce94eb4d3da399eb23bb9911a0',
      appIdParam: 'app_id',
      refreshInterval: 1000 * 10, // 10 seconds
    }
  },
};

const dev = {
  ...base,
};

const prod = {
  ...base,
};

const config = process.env.REACT_APP_STAGE === 'production'
  ? prod
  : dev;

export default {
  ...config
};
