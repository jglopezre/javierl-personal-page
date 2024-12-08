import React from 'react';
import { Col, Row } from 'react-grid-system';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  font-weight: 100;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  width: 100%;
  text-align: center;
  padding: 1rem;
`;

export const Footer: React.FC = () => {
  const date = new Date().getFullYear();

  return (
    <Row>
      <Col xs={12}>
        <FooterStyled>
          &copy;
          {date}
          .
          &nbsp;Hecho por Javier L.
        </FooterStyled>
      </Col>
    </Row>
  );
};
