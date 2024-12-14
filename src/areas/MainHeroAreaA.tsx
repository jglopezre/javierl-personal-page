import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { motion } from 'motion/react';
import { AnimatedTextHolder } from '@/components/AnimatedTextHolder';
import { useDarkModeContext } from '@/customHooks/useDarkModeContext';

const AnimatedImageWrapper = motion.div;
const FadingText = motion.p;

const cardBackGroundSelector = (isDarkMOde: boolean) => (
  isDarkMOde
    ? 'linear-gradient(rgba(128, 128, 128, 0.4), rgba(90, 90, 90, 0.7))'
    : 'linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8))'
);

const ContainerStyled = styled.div<{ $isDarkMode: boolean }>`
  min-width: 360px;
  max-width: 80%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  overflow-x: hidden;
  backdrop-filter: blur(6px);
  border-radius: 5px;
  background-image: ${({ $isDarkMode }) => cardBackGroundSelector($isDarkMode)};
  border-color: ${({ theme }) => theme.colors.secondary};
  border-style: solid;
  border-width: 2px;
`;

const AnimatedImageWrapperStyled = styled(AnimatedImageWrapper)`
  margin-bottom: 2rem;;
`;

const FadingTextStyled = styled(FadingText)`
  line-height: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  white-space: pre-line;
`;

export const MainHeroAreaLeft: React.FC = () => {
  const data = useStaticQuery(graphql`
    query MainHeroAreaLeftData {
      dataJson {
        mainHero {
          leftSectionTitle
          leftSectionParagraph
        }
      }
    }
  `);

  const { isDarkMode } = useDarkModeContext();

  return (
    <ContainerStyled $isDarkMode={isDarkMode}>
      <AnimatedImageWrapperStyled
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <StaticImage
          src="../images/icon.png"
          alt="Javier Logo"
          height={128}
          backgroundColor="transparent"
          placeholder="none"
        />
      </AnimatedImageWrapperStyled>
      <AnimatedTextHolder
        text={data.dataJson.mainHero.leftSectionTitle}
        fontSize="2.5rem"
        bolder
      />
      <FadingTextStyled
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
      >
        {data.dataJson.mainHero.leftSectionParagraph}
      </FadingTextStyled>
    </ContainerStyled>
  );
};
