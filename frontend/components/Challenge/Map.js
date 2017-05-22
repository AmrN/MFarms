import React from 'react';
import { Flex, Box } from 'reflexbox';
const Map = () => {
  return (
    <Flex className="Map" align="center" justify="center" flexColumn>
      <div className="image-container">
        <img src="/static/challenge/arab map.png" alt="arab map" />
      </div>
      <div className="text-wrapper">
        <p>The Arab region in particular suffers from limited water sources and arable land</p>
      </div>

    </Flex>
  );
};

export default Map;