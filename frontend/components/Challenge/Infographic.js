import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import Waypoint from 'react-waypoint';

const minOpacity = 0.3;

class InfographicRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerStyles: {
        opacity: minOpacity,
      }
    }
  }

  handleUpperLeave(info) {
    let opacity = this.state.containerStyles.opacity;
    if (info.currentPosition === 'below') {
      opacity = minOpacity;
    } else {
      opacity = 1;
    }
    this.setState({
      containerStyles: {
        opacity,
      }
    });
  }

  handleLowerLeave(info) {
    let opacity = this.state.containerStyles.opacity;
    if (info.currentPosition === 'above') {
      opacity = minOpacity;
    } else {
      opacity = 1;
    }
    this.setState({
      containerStyles: {
        opacity,
      }
    });
  }

  render() {
    const { iconUrl, imageUrl, children } = this.props;
    const containerStyles = this.state.containerStyles;

    // console.log(containerStyles);

    return (
      <div
        ref={el => this.container = el}
        className="InfographicRow"
        style={containerStyles}
      >
        <Waypoint
          topOffset={"50%"}
          bottomOffset="49%"
          onLeave={(i) => this.handleUpperLeave(i)}
        />
        <Flex justify="center">
          <div className="icon-container">
            <div className="vertical-line" />
            <div className="horizontal-line" />
            <img src={iconUrl} alt="infographic icon" />
          </div>

          <div className="text-image-container">
            <div className="text-container">
              {children}
            </div>
            <div className="image-container">
              <img src={imageUrl} alt="infographic image" />
            </div>
          </div>

        </Flex>
        <Waypoint
          topOffset="49%"
          bottomOffset="49%"
          onLeave={(i) => this.handleLowerLeave(i)}
        />

        {/*<div className="fixed" />*/}
      </div>

    );
  }
}

const Infographic = () => {
  return (
    <div className="Infographic">
      <div className="container">


        <InfographicRow
          iconUrl={'/static/challenge/statistics1.png'}
          imageUrl={'/static/challenge/arab.png'}
        >
          Only 5% of region is arable and permanent crop land - this is only 1% in GCC
        </InfographicRow>


        <InfographicRow
          iconUrl={'/static/challenge/statistics2.png'}
          imageUrl={'/static/challenge/imports.png'}
        >
          Arab countries import half of their food - with figures rising to 90% for the GCC
        </InfographicRow>


        <InfographicRow
          iconUrl={'/static/challenge/statistics3.png'}
          imageUrl={'/static/challenge/bill.png'}
        >
          Estimated food import bill for Arab region  to reach over $400 bn by 2030
        </InfographicRow>

      </div>
    </div>
  );
};

export default Infographic;