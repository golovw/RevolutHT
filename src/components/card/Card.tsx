import React from 'react';

import { Container } from './Card.styles';

interface CardProps {
  children?: React.ReactNode,
}

export const Card = ({ children }: CardProps) => (
  <Container>
    {children}
  </Container>
);
