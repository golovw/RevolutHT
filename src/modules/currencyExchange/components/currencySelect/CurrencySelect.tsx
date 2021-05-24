import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';

import { Account as AccountI } from 'ducks/Account.duck';

import { Select } from './CurrencySelect.styles';

interface Props {
  value: string;
  accounts: AccountI[];
  onChange?: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const renderMenuItem = ({ id, currency }: AccountI) => (
  <MenuItem key={id} value={id}>{currency}</MenuItem>
);

export const CurrencySelect = (props: Props) => {
  const {
    value,
    accounts,
    onChange,
  } = props;

  return (
    <Select disableUnderline value={value} onChange={onChange}>
      {accounts.map(renderMenuItem)}
    </Select>
  );
};
