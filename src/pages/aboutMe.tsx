import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Col, Row } from 'react-grid-system';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/Seo';

const pageTitle = 'Acerca de Mi';

const AboutMe: React.FC<PageProps> = () => {
  console.log('blog');
  return (
    <Layout>
      <Row component="section">
        <Col>
          <h1>Hola, soy Javier!</h1>
        </Col>
      </Row>
    </Layout>
  );
};

export default AboutMe;

export const Head: HeadFC = () => <SEO title={pageTitle} />;
