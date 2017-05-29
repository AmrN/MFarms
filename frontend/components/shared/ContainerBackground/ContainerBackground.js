import React from 'react';

const ContainerBackground = ({ children }) => {
  return (
    <section className="ContainerBackground -center -white">
      <div className="content">
        {children}
      </div>
    </section>
  );
};

export default ContainerBackground;