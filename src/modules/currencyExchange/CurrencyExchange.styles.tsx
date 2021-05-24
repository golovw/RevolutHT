import styled, { css } from 'styled-components';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

import { Card } from 'components/card';

export const Container = styled(Card)`
  position: relative;
`;

export const AccountScope = styled.div`
  display: flex;
  height: 50%;
  border-radius: 0 0 10px 10px;
`;

export const AccountScopeGrayed = styled(AccountScope)`
  ${({ theme: { colors } }) => css`
    background: ${colors.lightGrayishBlue};
    position: relative;
  `}
`;

export const Rate = styled(Chip)`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white};
    color: ${colors.pureBlue};
    font-size: 14px;
    width: 150px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border: 2px solid ${colors.lightGrayishBlue};
    z-index: 2;
  `}
`;

export const TransactionButton = styled(Button)`
  ${({ theme: { colors } }) => css`
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 40px;
    text-transform: initial;
    background-color: ${colors.pureBlue};
  `}
`;
