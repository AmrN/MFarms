import React from 'react';
import HorizontalIconsList from '../HorizontalIconsList/HorizontalIconsList';

const Farmers = () => {
  const icons = [
    {
      url: '/static/containers/reduce-risk.png',
      text: 'Reduce Risk',
    },
    {
      url: '/static/containers/increase-income.png',
      text: 'Increase your income',
    },
    {
      url: '/static/containers/save-water-and-land.png',
      text: 'Increase land and water productivity',
    },
    {
      url: '/static/containers/over-the-year.png',
      text: 'Grow all-year',
    },
    {
      url: '/static/containers/anywhere.png',
      text: 'Grow anywhere',
    },
    {
      url: '/static/containers/reduce-carbon-print.png',
      text: 'Reduce your carbon footprint',
    },
  ]

  return (
    <div className="Farmers">
      <section className="-grey -center">
        <div className="container">
          <h2>The Leafy Green Machine<sup>TM</sup> will help you:</h2>

          <HorizontalIconsList icons={icons} />
        </div>

      </section>

      <section className="-white -center farm-container-section">
        <div className="copy-container">
          <p className="-lg">
            <b>Farming</b> has alwyas been a <b>high-risk industry</b> with tough outdoor working conditions, especially in our region. Now more than ever <b>we must adopt</b> more financially feasible and <b>sustainable farming practices</b>. This is where we come in.
          </p>
          <p className="-lg">
            <b>Madar Farms</b> is facilitating access to the most <b>commercially viable</b>, modular and sustainable agri-tech.
          </p>

          <p className="-lg">
            Our container farms are ready-to-use. We will help you setup your <b>new farm, provide training</b>, and even <b>maintain your farms</b> for you. You tell us how we can help, and we are committed to being there.
          </p>

          <p className="-lg">
            Get in touch with us (<img className="icon" src="/static/footer/mail.png" alt="mail" />) to learn more about the benefits of adopting hydroponic technology and growing in the controlled environment of our container farms.
          </p>
        </div>
        <button>Shop now</button>
      </section>
    </div>
  );
};

export default Farmers;