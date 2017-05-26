import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import NavBar from './NavBar';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgImgStyles: {
        minHeight: null,
        minWidth: null,
        top: null,
        left: null,
      }
      // lastWindowHeight: window.innerHeight
    };
    this.updateBackgroundImgDimensions = this.updateBackgroundImgDimensions.bind(this);
  }

  getOffset(el) {
    el = el.getBoundingClientRect();
    return {
      left: el.left + window.scrollX,
      top: el.top + window.scrollY
    }
  }

  componentDidMount() {
    // hack as an alternative to background-attachment: fixed, which has problems in mobile browsers
    this.updateBackgroundImgDimensions();
    window.addEventListener('resize', this.updateBackgroundImgDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.upd);
  }

  updateBackgroundImgDimensions() {
    // if (window.innerHeight != this.state.lastWindowHeight) {
    // const diff = window.inner
    this.setState({
      bgImgStyles: {
        // minHeight: this.container.clientHeight,
        // minWidth: this.container.clientWidth,
        // left and top
        ...this.getOffset(this.container),
      }
    });
    // }
  }

  render() {
    // const heroBackground = `url(/static/challenge/challenge-background.jpg)`;
    const heroBackground = `url(${this.props.backgroundUrl})`;
    const bgImgStyles = {
      ...this.state.bgImgStyles,
      backgroundImage: heroBackground,
    };
    const { title, contentImage, children } = this.props;

    return (
      <div ref={el => this.container = el} className="Hero">
        <div className="bg-img" style={bgImgStyles} />
        <div className="content-container">
          <Flex flexColumn py={5} align="center">
            <h1>{title}</h1>

            <Flex flexColumn className="intro">
              {contentImage && (
                <div className="intro-image">
                  <img
                    src={contentImage}
                    alt="content image"
                    className="intro-image"
                  />
                </div>
              )}

              <div className="intro-content">
                {children}
              </div>
            </Flex>
          </Flex>
        </div>


      </div>
    );
  }
}

export default Hero;