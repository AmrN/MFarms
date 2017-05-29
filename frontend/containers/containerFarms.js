import PageLayout from '../components/PageLayout';
import Hero from '../components/Header/Hero';
import Link from 'next/link';
import ContainerFarms from '../components/ContainerFarms/ContainerFarms';
import HeadTitle from '../components/HeadTitle';

const renderContainerFarmsHeroContent = () => (
  <div className="hero-intro-wrapper">
    <img src="/static/containers/container.png" alt="container"/>
    <p>
      We use closed and insulated <br /> container farms, where growing <br /> conditions are monitored in real time on our smart phones
    </p>
  </div>
);

export default () => (
  <div>
    <HeadTitle title="Container Farms" />

    {/*<PageLayout title="Farmers">*/}
    <Hero
      backgroundUrl="/static/containers/background.jpg"
      title="Container Farms"
    >
      {renderContainerFarmsHeroContent()}
    </Hero>
    <main className="main-content">
      <ContainerFarms />

    </main>
  </div>
)