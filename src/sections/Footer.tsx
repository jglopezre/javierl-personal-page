import React from 'react';
import { Col, Row } from 'react-grid-system';
import styled from 'styled-components';

const TextStyled = styled.p`
  font-weight: 100;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  width: 100%;
  text-align: center;
  padding: 1rem;
`;

export const Footer: React.FC = () => {
  const date = new Date().getFullYear();

  return (
    <Row component="footer">
      <Col xs={12}>
        <TextStyled>
          &copy;
          {date}
          .
          &nbsp;Hecho por Javier L.
        </TextStyled>
      </Col>
    </Row>
  );
};
