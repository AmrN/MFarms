import React from 'react';
import { Flex, Box } from 'reflexbox';

const OurChallenge = () => {
  return (
    <section className="OurChallenge">
      <Flex className="container wrapper" align="center" flexColumn>
        <Box>
          <h2>
            Thus our <em>challenge </em>  starts with facing:
          </h2>
        </Box>

        <Flex flexAuto justify="space-around" wrap>
          <div className="image-container">
            <img src="/static/challenge/resources.png" alt="resources" />
          </div>
          <div className="image-container">
            <img src="/static/challenge/water.png" alt="water" />
          </div>
          <div className="image-container">
            <img src="/static/challenge/land.png" alt="land" />
          </div>
          <div className="image-container">
            <img src="/static/challenge/soil.png" alt="soil" />
          </div>
          <div className="image-container">
            <img src="/static/challenge/population.png" alt="population" />
          </div>
        </Flex>
      </Flex>

    </section>
  );
};

export default OurChallenge;