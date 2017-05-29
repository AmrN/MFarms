import React from 'react';
import LeafyGreenMachine from '../shared/LeafyGreenMachine';
import HorizontalIconsList from '../HorizontalIconsList/HorizontalIconsList';
import ContainerBackground from '../shared/ContainerBackground/ContainerBackground';

const LGMIcons = [
  {
    url: '/static/containers/brassica.png',
    text: (
      <div>
        <h3>Brassicas</h3>
        <p>High in nutritional value, rich in flavor, and vibrant in color, brassicas like kale, swiss chard and spicy arugula grow superbly well.</p>
      </div>
    ),
  },
  {
    url: '/static/containers/lettuce.png',
    text: (
      <div>
        <h3>Lettuces</h3>
        <p>Experience the freshness of variety of lettuces like crunchy romaine, smooth butterhead, or delicate lola rosa.</p>
      </div>
    ),
  },
  {
    url: '/static/containers/herbs.png',
    text: (
      <div>
        <h3>Herbs</h3>
        <p>Enhance the flavor of any dish with fragnant herbs like sweet basil, peppery oregano or fresh mint.</p>
      </div>
    ),
  },
]

const LGMFeaturesIcons = [
  {
    url: '/static/containers/LGM-features/dimensions.png',
    text: (
      <div>
        <p>
          <b>Dimensions:</b> Length: 12.2m
          <br />
          Width: 2.44m
          <br />
          Height: 2.89m
        </p>
      </div>
    ),
  },
  {
    url: '/static/containers/LGM-features/weight.png',
    text: (
      <div>
        <p>
          <b>Weight:</b> 7.5 Tons
        </p>
      </div>
    ),
  },
  {
    url: '/static/containers/LGM-features/temperature.png',
    text: (
      <div>
        <p>
          <b>Temperature:</b> Proven optimal growing in weather extremes - from Scandinavian winters to Middle Easter summers
        </p>
      </div>
    ),
  },
  {
    url: '/static/containers/LGM-features/airflow.png',
    text: (
      <div>
        <p>
          <b>Airflow:</b> Multi-planed airflow system
        </p>
      </div>
    ),
  },
  {
    url: '/static/containers/LGM-features/water.png',
    text: (
      <div>
        <p>
          <b>Water:</b> Advanced pump and drainage system using less than 40 litres per day
        </p>
      </div>
    ),
  },
  {
    url: '/static/containers/LGM-features/led.png',
    text: (
      <div>
        <p>
          <b>Led:</b> High efficiency LED lighting
        </p>
      </div>
    ),
  },
  {
    url: '/static/containers/LGM-features/vertical-farming.png',
    text: (
      <div>
        <p>
          <b>Vertical farming:</b> 256 grow towers
        </p>
      </div>
    ),
  },
  {
    url: '/static/containers/LGM-features/workstation.png',
    text: (
      <div>
        <p>
          <b>Feasibility:</b> Multi-function work station
        </p>
      </div>
    ),
  },
  {
    url: '/static/containers/LGM-features/climate.png',
    text: (
      <div>
        <p>
          <b>Climate:</b> Automated controls and sensors
        </p>
      </div>
    ),
  },
  {
    url: '/static/containers/LGM-features/nutrient.png',
    text: (
      <div>
        <p>
          <b>Nutrients:</b> Automated nutrient dosing system
        </p>
      </div>
    ),
  },
  {
    url: '/static/containers/LGM-features/app.png',
    text: (
      <div>
        <p>
          <b>Mobile:</b> App-enabled remote monitoring
        </p>
      </div>
    ),
  },
  {
    url: '/static/containers/LGM-features/training.png',
    text: (
      <div>
        <p>
          <b>Training:</b> 2 day "Farm Camp" Training Program for up to 2 key operators
        </p>
      </div>
    ),
  },
]

const ContainerFarms = () => {
  return (
    <div className="ContainerFarms">
      <section className="-grey -center">
        <div className="container">
          <LeafyGreenMachine />
        </div>
      </section>


      <ContainerBackground>
        <p className="-lg">
          <b>Madar Farms</b> is facilitating access to the most <b>commercially viable</b>, modular and sustainable agri-tech.
          </p>
        <p className="-lg">
          No prior farming necessary. Our technology takes the guesswork out of farming and makes it so simple a child can do it.
          </p>

        <p className="-lg">
          Our container farms are ready-to-use. We will help you setup your <b>new farm, provide training</b>, and even <b>maintain your farms</b> for you. You tell us how we can help, and we are committed to being there.
          </p>

        <p className="-lg">
          Get in touch with us (<img className="icon" src="/static/footer/mail.png" alt="mail" />) to learn more about the benefits of adopting hydroponic technology and growing in the controlled environment of our container farms.
          </p>
      </ContainerBackground>

      <section className="-grey -center">
        <h2>With LGM<sup>TM</sup> you can grow</h2>
        <div className="container">
          <HorizontalIconsList icons={LGMIcons} baseItemWidth="250px" />

        </div>
      </section>

      <section className="-white -center">
        <h2>LGM<sup>TM</sup> features</h2>
        <div className="container">
          <HorizontalIconsList
            icons={LGMFeaturesIcons}
            contentHorizontal
            baseItemWidth="380px" />
        </div>
      </section>

      <section className="-white -center">
        <div className="container">
          <div className="one-figure-container">
            <figure>
              <img src="/static/containers/side-view.png" alt="container exterior side view" />
              <figcaption>Exterior side view</figcaption>
            </figure>
          </div>
          <div className="two-figure-container">
            <figure>
              <img src="/static/containers/front-view-exterior.png" alt="container exterior front view" />
              <figcaption>Exterior front view</figcaption>
            </figure>
            <figure>
              <img src="/static/containers/front-view-interior.png" alt="container interior view" />
              <figcaption>Interior view</figcaption>
            </figure>
          </div>
        </div>
        <button>Order your container</button>
      </section>
    </div >
  );
};

export default ContainerFarms;