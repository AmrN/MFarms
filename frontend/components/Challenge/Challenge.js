import React from 'react';
import OurChallenge from './OurChallenge';
import Map from './Map';
import Infographic from './Infographic';

const Challenge = () => {
  return (
    <div className="Challenge">
      <OurChallenge />
      <Map />
      <Infographic />

      <div className="cta-container">
        <button className="cta">Our approach</button>
      </div>

      <div className="container">
        <div className="citations">
          <div><b className="-neutral">Statistics Sources:</b></div>
          <div className="cite">
            <cite>UN Arab region sustainability <a href='#'>report</a></cite>
          </div>
          <div className="cite">
            <cite> <a href='#'>INRA</a> Addressing Agricultural Import dependence in MENA</cite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;