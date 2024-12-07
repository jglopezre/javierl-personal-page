import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Col, Row } from 'react-grid-system';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/Seo';

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <Row>
      <Col>
        <h1>Hola Javi</h1>
      </Col>
    </Row>
  </Layout>
);

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
