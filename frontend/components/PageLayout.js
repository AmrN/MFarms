import Header from './Header/Header'
import stylesheet from 'styles/index.scss';
import React, { Component } from 'react';
import Head from 'next/head'



class PageLayout extends Component {
  static childContextTypes = {
    reflexbox: React.PropTypes.object
  }

  getChildContext() {
    return {
      reflexbox: {
        breakpoints: {
          sm: '(max-width: 767px)',
          md: '(min-width: 768px)',
          lg: '(min-width: 1024)'
        }
      }
    }
  }

  render() {
    return (
      <div >
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <title>Madar Farms</title>
        </Head>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }}></style>
        <Header />        {this.props.children}
      </div >
    )
  }
}

export default PageLayout;