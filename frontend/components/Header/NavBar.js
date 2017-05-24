import React from 'react';
import { Flex, Box } from 'reflexbox';
import Link from 'next/link';

const NavBar = () => {
  return (
    <header className="NavBar">
      <Flex className="container" justify="space-between" align="center">
        <Flex align="center">
          <Link href="/">
            <a className="logo-link">
              <img className="logo" src="/static/menu/logo.png" alt="logo" />
            </a>
          </Link>
        </Flex>
        <Flex justify="flex-end" flexAuto align="center">
          <Flex className="menu-item" align="center">
            <div>
              About
            <div className="sub-menu">
                <Flex className="sub-menu-inner" flexColumn>
                  <div className="item">The Challenge</div>
                  <div className="item">The Challenge</div>
                  <div className="item">The Challenge</div>
                  <div className="item">The Challenge</div>
                </Flex>
              </div>

            </div>
          </Flex>
          <Flex className="menu-item" align="center">
            <div>
              <span >Our Services</span>
              <div className="sub-menu">
                <Flex className="sub-menu-inner" flexColumn>
                  <Link href="/farmers">
                    <a>
                      <div className="item">
                        Farmers
                      </div>
                    </a>
                  </Link>
                  <Link href="/business">
                    <a>
                      <div className="item">
                        businesses
                      </div>
                    </a>
                  </Link>
                </Flex>
              </div>

            </div>
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
    </header >
  );
};

export default NavBar;