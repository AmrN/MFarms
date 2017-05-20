import React from 'react';
import { Flex, Box } from 'reflexbox';

const componentName = () => {
  return (
    <header className="NavBar">
      <Flex className="container" justify="space-between" align="center">
        <Flex align="center">
          <img className="logo" src="/static/menu/logo.png" alt="logo" />
        </Flex>
        <Flex justify="flex-end" flexAuto align="center">
          <Flex px={2} className="menu-item" align="center">
            <div>
              About
            <div className="sub-menu">
                <Flex className="sub-menu-inner" flexColumn>
                  <Box p={2}>The Challenge</Box>
                  <Box p={2}>The Challenge</Box>
                  <Box p={2}>The Challenge</Box>
                  <Box p={2}>The Challenge</Box>
                </Flex>
              </div>

            </div>
          </Flex>
          <Flex px={2} className="menu-item" align="center">
            <span >Our Services</span>
          </Flex>
          <Flex px={2} className="menu-item" align="center">
            <span >Media</span>
          </Flex>
          <Flex px={2} className="menu-item" align="center">
            <span >Shop Now</span>
          </Flex>
          <Flex px={2} className="menu-item" align="center">
            <span >Contact us</span>
          </Flex>
        </Flex>
      </Flex>
    </header>
  );
};

export default componentName;