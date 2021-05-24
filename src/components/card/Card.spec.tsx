import React from 'react';

import { renderWithTheme } from 'helpers/test';

import { Card } from './Card';

describe('Card', () => {

  describe('Snapshots', () => {
    it('should match snapshot with children', () => {
      const component = renderWithTheme(
        <Card>test</Card>
      );

      expect(component).toMatchSnapshot();
    })
  });
});
