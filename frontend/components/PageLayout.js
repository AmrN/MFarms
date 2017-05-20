import Header from './Header/Header'
import stylesheet from 'styles/index.scss';
import React, { Component } from 'react';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

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
        <style dangerouslySetInnerHTML={{ __html: stylesheet }}></style>
        <Header />        {this.props.children}
      </div >
    )
  }
}

export default PageLayout;