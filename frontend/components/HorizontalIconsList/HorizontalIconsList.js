import React from 'react';

const HorizontalIconsList = ({ icons }) => {
  if (!icons) {
    return null;
  }
  return (
    <div className="HorizontalIconsList">
      {icons.map(icon => (
        <div
          key={icon.url + icon.text ? icon.text : ''}
          className="icon-item"
        >
          <img
           className="icon"
           src={icon.url} 
           alt="icon"/>

          <p className="icon-text">
            {icon.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HorizontalIconsList;