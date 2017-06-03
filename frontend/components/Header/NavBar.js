import React from 'react';
import { Flex, Box } from 'reflexbox';
import Link from 'next/link';

const NavBar = () => {
  return (
    <header className="NavBar">
      <Flex className="container" justify="space-between" align="center">
        <Flex align="center">
          <Link href="/?page=challenge" as="/">
            <a className="logo-link">
              <img className="logo" src="/static/menu/logo.png" alt="logo" />
            </a>
          </Link>
        </Flex>
        <Flex justify="flex-end" flexAuto align="center">
          <Flex className="menu-item" align="center">
            <div>
              <div className="item">About</div>
              <div className="sub-menu">

                <div className="sub-menu-inner">
                  <div className="item">The Challenge</div>
                  <div className="item">The Challenge</div>
                  <div className="item">The Challenge</div>
                  <div className="item">The Challenge</div>
                </div>

                {/*</Flex>*/}
              </div>

            </div>
          </Flex>
          <Flex className="menu-item" align="center">
            <div>
              <Link href="/?page=services" as="/services">
                <a>
                  <div>Our Services</div>
                </a>
              </Link>
              <div className="sub-menu">
                <div className="sub-menu-inner">
                  <Link href="/?page=farmers" as="/farmers">
                    <a>
                      <div className="item">
                        Farmers
                      </div>
                    </a>
                  </Link>
                  <Link href="/?page=business" as="/business">
                    <a>
                      <div className="item">
                        businesses
                      </div>
                    </a>
                  </Link>
                  <Link href="/?page=governments" as="/governments">
                    <a>
                      <div className="item">
                        governments
                      </div>
                    </a>
                  </Link>
                  <Link href="/?page=get-involved" as="/get-involved">
                    <a>
                      <div className="item">
                        other
                      </div>
                    </a>
                  </Link>
                </div>
              </div>

            </div>
          </Flex>
          <Flex className="menu-item" align="center">
            <div>
              <Link href="/?page=temp" as="/temp">
                <a>
                  <div>Shop Now</div>
                </a>
              </Link>
              <div className="sub-menu">
                <div className="sub-menu-inner">
                  <Link href="/?page=container" as="/container">
                    <a>
                      <div className="item">
                        Container Farms
                      </div>
                    </a>
                  </Link>

                </div>
              </div>

            </div>
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