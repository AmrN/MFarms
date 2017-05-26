import React from 'react';

const Icon = ({url}) => {
  return (
    <div className="Icon">
      <img
        src={url}
        alt="icon" />
    </div>
  );
};

const Content = ({children}) => (
  <div className="Content">
    {children}
  </div>
);

const IconWithContent = ({children}) => {
  return (
    <div className="IconWithContent">
      {children}
    </div>
  );
};

IconWithContent.Icon = Icon;
IconWithContent.Content = Content;

export default IconWithContent;