import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import { Col, Container, Row } from 'react-grid-system';

const NotFoundPage: React.FC<PageProps> = () => (
  <Container>
    <Row>
      <Col>
        <h1>Page not found!</h1>
      </Col>
      <Col>
        <Link to="/">Go home</Link>
      </Col>
    </Row>
  </Container>
);

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
