import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  font-weight: 100;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

export const Footer: React.FC = () => {
  const date = new Date().getFullYear();

  return (
    <FooterStyled>
      &copy;
      {date}
      .
      &nbsp;Hecho por Javier L.
    </FooterStyled>
  );
};
