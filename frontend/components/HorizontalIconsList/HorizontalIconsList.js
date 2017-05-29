import React from 'react';
import cn from 'classnames';

const HorizontalIconsList = ({ icons, vertical, contentHorizontal, baseItemWidth }) => {
  if (!icons) {
    return null;
  }

  const classes = cn('HorizontalIconsList', {
    'vertical': vertical,
    'content-horizontal': contentHorizontal
  });

  const getContent = (thing) => {
    if (typeof thing === 'string')
      return thing;
    return React.cloneElement(thing);
  }

  return (
    <div className={classes}>
      {icons.map(icon => (
        <div
          key={icon.url}
          className="icon-item"
          style={{flexBasis: baseItemWidth || null}}
        >
          <img
            className="icon"
            src={icon.url}
            alt="icon" />

          <div className="strong -neutral icon-text">
            {getContent(icon.text)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalIconsList;