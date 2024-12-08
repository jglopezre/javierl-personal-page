import React from 'react';
import { motion, Variants } from 'motion/react';
import styled from 'styled-components';

type NameHolderProps = {
  text: string
};

const TextContainer = motion.span;
const LeterContainer = motion.span;
const Cursor = motion.span;

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
  },
  visible: {
    opacity: 1,
  },
};

const cursorVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const TextContainerStyled = styled(TextContainer)`
  position: relative;
`;

const CursorStyled = styled(Cursor)`
  width: 3px;
  height: 100%;
  position: absolute;
  right: 0;
  background-color: yellow;
`;

export const NameHolder: React.FC<NameHolderProps> = ({ text }) => {
  const letters = text.split('', 40);

  return (
    <>
      <h1 hidden>{text}</h1>
      <TextContainerStyled
        variants={containerVariants}
        initial="hidden"
        animate="visible"
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
        <CursorStyled
          variants={cursorVariants}
        />
      </TextContainerStyled>

    </>
  );
};
