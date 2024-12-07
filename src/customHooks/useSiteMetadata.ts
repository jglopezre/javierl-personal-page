import { graphql, useStaticQuery } from 'gatsby';

export const UseSiteMetadata = () => {
  const data = useStaticQuery<Queries.UseSiteMetadataQuery>(graphql`
    query UseSiteMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          author,
        }
      }
    }  
  `);

  return data.site?.siteMetadata ?? null;
};
