import React from 'react';
import { Flex, Box } from 'reflexbox';

const NavBar = () => {
  return (
    <header className="NavBar">
      <Flex className="container" justify="space-between" align="center">
        <Flex align="center">
          <img className="logo" src="/static/menu/logo.png" alt="logo" />
        </Flex>
        <Flex justify="flex-end" flexAuto align="center">
          <Flex className="menu-item" align="center">
            <div>
              About
            <div className="sub-menu">
                <Flex className="sub-menu-inner" flexColumn>
                  <span className="item">The Challenge</span>
                  <span className="item">The Challenge</span>
                  <span className="item">The Challenge</span>
                  <span className="item">The Challenge</span>
                </Flex>
              </div>

            </div>
          </Flex>
          <Flex className="menu-item" align="center">
            <span >Our Services</span>
          </Flex>
          <Flex className="menu-item" align="center">
            <span >Media</span>
          </Flex>
          <Flex className="menu-item" align="center">
            <span >Shop Now</span>
          </Flex>
          <Flex className="menu-item" align="center">
            <span >Contact us</span>
          </Flex>
        </Flex>
      </Flex>
    </header>
  );
};

export default NavBar;