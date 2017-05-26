import Link from 'next/link'
import { Flex, Box } from 'reflexbox';
import NavBar from './NavBar';
import Hero from './Hero';
import React, { Component } from 'react';

// const Header = () => (
class Header extends Component {
  componentDidMount() {
    console.log('header mounted');
  }

  componentWillUnmount() {
    console.log('header unmounted');
  }
  
  
  render() {
    return (
      <div className="Header">
        <NavBar />
        {/*<Hero />*/}
      </div>
    )
  }
}
/*<div className="Header">
  <NavBar />
</div>
);*/

export default Header;