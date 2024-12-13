import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/Seo';
import { MainHero } from '@/sections/MainHero';

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <MainHero />
  </Layout>
);

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
