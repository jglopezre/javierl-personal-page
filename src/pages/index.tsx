import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Col, Row } from 'react-grid-system';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/Seo';
import { ThemeSelectorButton } from '@/components/ThemeSelectorButton';
import { NameHolder } from '@/components/NameHolder';

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <Row>
      <Col>
        <NameHolder text="Javier Lopez" />
      </Col>
      <Col>
        <ThemeSelectorButton />
      </Col>
    </Row>
  </Layout>
);

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
