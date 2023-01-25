import React from 'react';
import styled from 'styled-components';
import { flexDivConfig } from '../style/generalStyle'
import JLSquareLogo from '../images/javier-lopez-logo.svg';
import JLTypeLogo from '../images/javier-lopez-type.svg'

const Container = styled.div`
  ${flexDivConfig('center', 'flex-end', 'row')}
  flex-wrap: nowrap;
  column-gap: 10px;
`;

export const JALogo = () => {
  return (
    <Container>
      <div>
        <img src={JLSquareLogo} alt="" height="96"/>
      </div>
      <div>
        <img src={JLTypeLogo} alt="" height="80" />
      </div>
    </Container>
  )
}
