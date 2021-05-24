import styled, { css } from 'styled-components';

export const Container = styled.div`${
  ({ theme: { colors } }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  min-height: 100vh;
  background-color: ${colors.white};
`}`;
