import React from 'react';
import { Container } from 'react-grid-system';
import styled from 'styled-components';
import { Footer } from './Footer';
import { SimpleReactComponent } from '@/custom-types';

const StyledContainer = styled(Container)`
  min-height: 100vh;
`;

export const Layout: React.FC<SimpleReactComponent> = ({ children }) => (
  <StyledContainer>
    { children }
    <Footer />
  </StyledContainer>
);
