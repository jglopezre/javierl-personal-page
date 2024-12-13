import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Col, Row } from 'react-grid-system';
import { AnimatedTextHolder } from '@/components/AnimatedTextHolder';

export const MainHero: React.FC = () => {
  console.log('hero');
  return (
    <Row component="section">
      <Col>
        <StaticImage
          src="../images/icon.png"
          alt="Javier Logo"
          height={192}
          backgroundColor="transparent"
          placeholder="none"
        />
        <AnimatedTextHolder text="Hola, soy Javier!" fontSize="3.4rem" bolder={false} />

      </Col>
      <Col>
        <h2>Otra Cosa</h2>
      </Col>
    </Row>
  );
}