import styled, { css } from 'styled-components';

import Input from '@material-ui/core/Input';

interface ContainerProps {
  isReceiving?: boolean;
}

export const Container = styled.div<ContainerProps>`${
  ({ isReceiving }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    width: 100%;
    padding: ${(isReceiving) ? '0 20px 30px 20px': '30px 20px 0 20px'};
  `
}`;

export const Raw = styled.div`${
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `
}`;

export const Balance = styled.span`${
  ({ theme: { colors, typography } }) => css`
    font-size: ${typography.body};
    color: ${colors.stormGrey};
  `
}`;

export const AmountInput = styled(Input)`${
  ({ theme: { typography } }) => css`
    .MuiInputBase-input {
      font-size: ${typography.subtitle};
      text-align: end;
    }
  `
}`;

