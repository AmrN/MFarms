import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';

class InfographicRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verticalLineHeight: null,
    }
  }

  componentDidMount() {
    this.setDimensions();
  }

  setDimensions() {
    console.log(this);
    this.setState({
      verticalLineHeight: this.container.clientHeight,
    })
  }

  render() {
    const { iconUrl, imageUrl, children } = this.props;
    const verticalLineStyles = {
      height: this.state.verticalLineHeight
    }

    return (
      <div
       ref={el => this.container = el}
       className="InfographicRow"
      >
        <Flex justify="center">
          <Flex col={3} align="center" justify="center" className="icon-container">
            <div className="vertical-line" />
            <div className="horizontal-line" />
            <img src={iconUrl} alt="infographic icon" />
          </Flex>
          <Flex align="center" justify="center" col={4} className="text-container">
            {children}
          </Flex>
          <Flex align="center" justify="center" col={5} className="image-container">
            <img src={imageUrl} alt="infographic image" />
          </Flex>
        </Flex>
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
          Only 5% of region is arable and permanent crop land - this is only 1% in GCC
          Only 5% of region is arable and permanent crop land - this is only 1% in GCC
          Only 5% of region is arable and permanent crop land - this is only 1% in GCC
          Only 5% of region is arable and permanent crop land - this is only 1% in GCC
          Only 5% of region is arable and permanent crop land - this is only 1% in GCC
          Only 5% of region is arable and permanent crop land - this is only 1% in GCC
          1% in GCC
          Only 5% of region is arable and permanent crop land - this is only 1% in GCC
          Only 5% of region is arable and permanent crop land - this is only 1% in GCC
          Only 5% of region is arable and permanent crop land - this is only 1% in GCC
          1% in GCC
          Only 5% of region is arable and permanent crop land - this is only 1% in GCC
          Only 5% of region is arable and permanent crop land - this is only 1% in GCC
          Only 5% of region is arable and permanent crop land - this is only 1% in GCC
          1% in GCC
          Only 5% of region is arable and permanent crop land - this is only 1% in GCC
          Only 5% of region is arable and permanent crop land - this is only 1% in GCC
          Only 5% of region is arable and permanent crop land - this is only 1% in GCC
        </InfographicRow>

        <InfographicRow
          iconUrl={'/static/challenge/statistics1.png'}
          imageUrl={'/static/challenge/arab.png'}
        >
          Only 5% of region is arable and permanent crop land - this is only 1% in GCC
          Only 5% of region is arable and permanent crop land - this is only
        </InfographicRow>

      </div>
    </div>
  );
};

export default Infographic;