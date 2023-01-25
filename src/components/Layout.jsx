import React from 'react'
import styled from 'styled-components'

import { color, flexDivConfig } from '../style/generalStyle'



const Container = styled.div`
  background-color: ${color.background};
  color: ${color.font};
  min-height: 100vh;
  ${flexDivConfig('center', 'center')}
`;

export const Layout = ({children}) => {
  return (
    <Container>
      { children }
      <h1>Estamos en contrucción de este sitio!!</h1>
      <h2>Pronto podras ver toda la información.</h2>
      <h2>Gracias...</h2>
    </Container>
  )
}
