import React from 'react';
import IconWithContent from '../IconWithContent/IconWithContent';

const Icon = IconWithContent.Icon;
const Content = IconWithContent.Content;

const ServicesHeroContent = () => {
  return (
    <div className="ServicesHeroContent">
      <IconWithContent>
        <Icon url="/static/services/farmers.png" />
        <Content>
          <h3>Farmers</h3>
          <p>Our hydroponic container farms</p>
          <button>Shop now</button>
        </Content>
      </IconWithContent>
    </div>
  );
};

export default ServicesHeroContent;