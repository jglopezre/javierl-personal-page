import React from 'react';
import { Col, Row } from 'react-grid-system';
import styled from 'styled-components';
import { MainHeroAreaLeft } from '@/areas';
import { FireSphereBackgorund } from '@/components/FireSphereBackground';

const ColStyled = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RowStyled = styled(Row)`
  position: relative;
`;
export const MainHero: React.FC = () => {
  console.log('hero');
  return (
    <RowStyled component="section">
      <FireSphereBackgorund />
      <ColStyled>
        <MainHeroAreaLeft />
      </ColStyled>
      <ColStyled>
        <h2>Otra Cosa</h2>
      </ColStyled>
    </RowStyled>
  );
};
