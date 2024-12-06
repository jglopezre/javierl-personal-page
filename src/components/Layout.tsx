import React from 'react';
import { Container } from 'react-grid-system';
import { SimpleReactComponent } from '@/custom-types';
import { Footer } from './Footer';

export const Layout: React.FC<SimpleReactComponent> = ({ children }) => (
  <Container>
    { children }
    <Footer />
  </Container>
);
