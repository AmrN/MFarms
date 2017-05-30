import React from 'react';
import MenuContainer from '../shared/MenuContainer/MenuContainer';

const FollowUs = () => {
  return (
    <div className="FollowUs">
      <MenuContainer>
        <div style={{
          display: 'flex',
        }}
        >
          <img src="/static/get-involved/follow-us/facebook.png" alt="facebook" />
          <img src="/static/get-involved/follow-us/instagram.png" alt="instagram" />
          <img src="/static/get-involved/follow-us/twitter.png" alt="twitter" />
        </div>
      </MenuContainer>
    </div>
  );
};

export default FollowUs;