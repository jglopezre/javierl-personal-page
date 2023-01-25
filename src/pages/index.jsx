import * as React from "react"
import styled from "styled-components";

import { Layout } from "../components/Layout";
import { LinkBar } from "../components/LinkBar";

const Maindiv = styled.div`
  min-height: 100vh;
  border: solid 2px red;
  padding: 0;
  margin: 0;

`;

const Title = styled.h1`
  color: blue;
`

const IndexPage = () => {
  return (
    <Layout>
      <LinkBar />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Javierlo Dev</title>
