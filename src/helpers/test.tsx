import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from 'styles';

export const wrapWithTheme = (Component: React.ReactNode) => (
  <ThemeProvider theme={theme}>
    {Component}
  </ThemeProvider>
);

export const renderWithTheme = (Component: React.ReactNode, options?: any) => render(wrapWithTheme(Component), options);
