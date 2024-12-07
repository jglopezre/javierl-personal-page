import React from 'react';

export type SimpleReactComponent = {
  children: React.ReactNode
};

export type SEOComponentProps = {
  children?: React.ReactNode
  title?: string,
  description?: string,
  pathname?: string,
  keywords?: string[],
};
