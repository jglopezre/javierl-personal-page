import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Col, Container, Row } from 'react-grid-system';

const IndexPage: React.FC<PageProps> = () => (
  <Container>
    <Row>
      <Col>
        <h1>Hola Javi</h1>
      </Col>
    </Row>
  </Container>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Lo de javi</title>;
