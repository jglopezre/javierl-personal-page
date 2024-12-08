import React from 'react';
import { Container } from 'react-grid-system';
import styled from 'styled-components';
import { Footer } from './Footer';
import { SimpleReactComponent } from '@/custom-types';

const StyledContainer = styled(Container)`
  display: grid;
  min-height: 100dvh;
  grid-template-rows: 1fr auto;
`;

export const Layout: React.FC<SimpleReactComponent> = ({ children }) => (
  <StyledContainer>
    { children }
    <Footer />
  </StyledContainer>
);
