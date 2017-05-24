import Header from './Header/Header'
import Footer from './Footer/Footer';
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
    let {title} = this.props;
    title = title ? `${title} - Madar Farms` : `Madar Farms`;
    return (
      <div >
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <title>{title}</title>
        </Head>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }}></style>
        <Header />        {this.props.children}
        <Footer />
      </div >
    )
  }
}

export default PageLayout;