import styled, { css } from 'styled-components';

export const Container = styled.div`${
  ({ theme: { colors, shadows, shapes } }) => css`
    width: 500px;
    height: 500px;
    border-radius: ${shapes.container};
    background-color: ${colors.white};
    box-shadow: ${shadows[1]};
  `
}`
