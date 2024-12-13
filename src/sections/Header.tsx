import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Col, Row } from 'react-grid-system';
import { ThemeSelectorButton } from '@/components/ThemeSelectorButton';
import { MainNavBar } from '@/components/MainNavbar';
import { AnimatedTextHolder } from '@/components/AnimatedTextHolder';

const HeaderRowStyled = styled(Row)`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const Header: React.FC = () => {
  const data = useStaticQuery(graphql`
    query HeaderSectionDataQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <HeaderRowStyled component="header">
      <Col order={{ xs: 1, md: 1 }}>
        <AnimatedTextHolder text={data.site.siteMetadata.title} fontSize="1.6rem" bolder />
      </Col>
      <Col order={{ xs: 3, md: 2 }}>
        <MainNavBar />
      </Col>
      <Col xs="content" order={{ xs: 2, md: 3 }}>
        <ThemeSelectorButton />
      </Col>
    </HeaderRowStyled>
  );
};
