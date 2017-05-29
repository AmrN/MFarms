import React from 'react';
import LeafyGreenMachine from '../shared/LeafyGreenMachine';
import ContainerBackground from '../shared/ContainerBackground/ContainerBackground';

const Farmers = () => {
  return (
    <div className="Farmers">
      <section className="-grey -center">
        <div className="container">
          <LeafyGreenMachine />
        </div>
      </section>

      <ContainerBackground>
        <p className="-lg">
          <b>Farming</b> has always been a <b>high-risk industry</b> with tough outdoor working conditions, especially in our region. Now more than ever <b>we must adopt</b> more financially feasible and <b>sustainable farming practices</b>. This is where we come in.
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
        <button>Shop now</button>
      </ContainerBackground>

    </div>
  );
};

export default Farmers;