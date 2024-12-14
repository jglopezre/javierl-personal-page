import React from 'react';
import { Link } from 'gatsby';
import styled, { css, keyframes } from 'styled-components';

const url = {
  home: '/',
  blog: '/blog/',
  aboutMe: '/aboutMe/',
};

const toRight = keyframes`
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
`;

const toLeft = keyframes`
  from {
    right: -100%;
  }
  to {
    right: 0;
  }
`;

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const underLineCommonStyle = css`
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
`;

const LinkStyled = styled(Link)<{ $active?: boolean }>`
  color: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.text)};
  position: relative;
  text-decoration: none;
  overflow-x: hidden;
  font-weight: ${({ $active }) => ($active ? '700' : 'inherit')};
  &:hover {
    &::before {
      ${underLineCommonStyle}
      left: 0;
      bottom: 0;
      background-color: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.text)};
      animation: ${toRight} 0.1s linear;
    }
    &::after {
      ${underLineCommonStyle}
      right: 0;
      top: 0;
      background-color: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.text)};
      animation: ${toLeft} 0.1s linear;
    }
    
  }
`;

export const MainNavBar: React.FC = () => {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  return (
    <NavStyled>
      <LinkStyled to={url.home} $active={pathname === url.home}>Home</LinkStyled>
      <LinkStyled to={url.aboutMe} $active={pathname === url.aboutMe}>Acerca de mí</LinkStyled>
      <LinkStyled to={url.blog} $active={pathname === url.blog}>Blog</LinkStyled>
    </NavStyled>
  );
};
