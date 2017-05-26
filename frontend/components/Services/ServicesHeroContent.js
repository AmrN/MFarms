import React from 'react';
import IconWithContent from '../IconWithContent/IconWithContent';

const Icon = IconWithContent.Icon;
const Content = IconWithContent.Content;

const ServicesHeroContent = () => {
  return (
    <div className="ServicesHeroContent">
      <div className="item-wrapper">
        <IconWithContent>
          <Icon url="/static/services/farmers.png" />
          <Content>
            <div className="content-wrapper">
              <h2>Farmers</h2>
              <p>Our hydroponic container farms</p>
              <button>Shop now</button>
            </div>
          </Content>
        </IconWithContent>
      </div>

      <div className="item-wrapper">
        <IconWithContent>
          <Icon url="/static/services/businesses.png" />
          <Content>
            <div className="content-wrapper">
              <h2>Businesses</h2>
              <p>Consistent supply of local produce</p>
              <button>Shop now</button>
            </div>

          </Content>
        </IconWithContent>
      </div>

      <div className="item-wrapper">
        <IconWithContent>
          <Icon url="/static/services/government.png" />
          <Content>
            <div className="content-wrapper">
              <h2>Governments</h2>
              <p>Tackling food and water security</p>
              <button>Learn more</button>
            </div>

          </Content>
        </IconWithContent>
      </div>

      <div className="item-wrapper">
        <IconWithContent>
          <Icon url="/static/services/others.png" />
          <Content>
            <div className="content-wrapper">
              <h2>Others</h2>
              <p>Fresh, sustainable, and none GMO</p>
              <button>Learn more</button>
            </div>
          </Content>
        </IconWithContent>
      </div>

    </div>
  );
};

export default ServicesHeroContent;