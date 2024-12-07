import React from 'react';
import { UseSiteMetadata } from '@/customHooks/useSiteMetadata';
import { SEOComponentProps } from '@/custom-types';

export const SEO: React.FC<SEOComponentProps> = ({
  title,
  description,
  pathname,
  children,
}) => {
  const siteMetadata = UseSiteMetadata();

  const seo = {
    title: `${title || siteMetadata?.title}`,
    description: `${description || siteMetadata?.description}`,
    image: `${siteMetadata?.siteUrl}${siteMetadata?.image}`,
    url: `${siteMetadata?.siteUrl}${pathname || ''}`,
    author: `${siteMetadata?.author}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="author" content={seo.author} />
      <meta name="url" content={seo.url} />
      {children}
    </>
  );
};
