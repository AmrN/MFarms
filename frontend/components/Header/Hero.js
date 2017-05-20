import React from 'react';
import { Flex, Box } from 'reflexbox';
import NavBar from './NavBar';

const Hero = () => {
  const heroBackground = 'url(/static/challenge/challenge-background.jpg)';
  const styles = {
    backgroundImage: heroBackground,
    backgroundSize: 'cover',
  };
  return (
    <div className="Hero" style={styles}>
      <NavBar />
      <Flex flexColumn py={5} align="center">
        <h1>The Challenge</h1>

        <Flex flexColumn pt={6} className="intro">
          <img
            src="/static/challenge/UN.png"
            alt="united nations"
            className="intro-image"
          />

          <div className="intro-content">
            <p>
              "Modern agriculture, is more resource intensive, very fossil fuel dependent, uses fertilizers, and is based on massive production.
              <br />
              <em>This policy has to change.</em>
              <br />
              Resource scarcity, increased population, decresing land availability and accessibility, emerging water scarcity, and soil degradation require us to re-think how best to use our resources for future generations."
              <br />
              <strong>United Nations</strong>
            </p>
          </div>
        </Flex>
      </Flex>

    </div>
  );
};

export default Hero;