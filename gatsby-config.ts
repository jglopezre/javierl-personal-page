import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: '<LoDeJavi />',
    description: 'Portfolio personal y blog donde comparto lo que se',
    siteUrl: 'https://www.lodejavi.xyz',
    image: '/images/icon.png',
    author: 'Javier Lopez',
  },
  // More easily incorporate content into your pages through automatic TypeScript
  // type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/data/',
      },
      __key: 'data',
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Montserrat:400,700',
            'Outfit:100,400,700',
            'Parkinsans:400,700',
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
        start_url: '/',
        display: 'browser',
        name: 'Lo de Javi',
        short_name: 'LoDeJavi',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
      },
    },
  ],
};

export default config;
