import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Col, Row } from 'react-grid-system';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/Seo';

const SoyBlog: React.FC<PageProps> = () => {
  console.log('blog');
  return (
    <Layout>
      <Row component="section">
        <Col>
          <h1>Hola, soy Blog!</h1>
        </Col>
      </Row>
    </Layout>
  );
};

export default SoyBlog;

export const Head: HeadFC = () => <SEO title="blog" />;
