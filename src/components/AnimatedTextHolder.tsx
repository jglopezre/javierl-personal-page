import React from 'react';
import { motion, Variants } from 'motion/react';
import styled from 'styled-components';

type AnimatedTextHolderProps = {
  text: string,
  fontSize: string
  bolder: boolean
};

const TextContainer = motion.div;
const LeterContainer = motion.div;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const TextContainerStyled = styled(TextContainer)<{ $fontsize: string, $fontWeight: boolean }>`
  position: relative;
  display: flex;
  flex-direction: row;
  font-size: ${(props) => props.$fontsize};
  font-weight: ${(props) => (props.$fontWeight ? '700' : '400')};
  font-family: 'Montserrat';
`;

export const AnimatedTextHolder: React.FC<AnimatedTextHolderProps> = ({ text, fontSize = '1rem', bolder = false }) => {
  const letters = text.split('', 40);

  return (
    <>
      <h1 hidden>{text}</h1>
      <TextContainerStyled
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        $fontsize={fontSize}
        $fontWeight={bolder}
      >
        {
          letters.map((char, index) => (
            <LeterContainer
              key={char + index}
              variants={childVariants}
            >
              {char === ' ' ? '\u00A0' : char}
            </LeterContainer>
          ))
        }
      </TextContainerStyled>
    </>
  );
};
