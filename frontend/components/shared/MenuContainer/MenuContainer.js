import React from 'react';

const MenuContainer = ({ children }) => {
  return (
    <div className="MenuContainer">
      <div className="menu-container-inner">
        {children}
      </div>
    </div>
  );
};

export default MenuContainer;