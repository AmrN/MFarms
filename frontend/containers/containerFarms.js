import PageLayout from '../components/PageLayout';
import Hero from '../components/Header/Hero';
import Link from 'next/link';
import ContainerFarms from '../components/ContainerFarms/ContainerFarms';
import HeadTitle from '../components/HeadTitle';

const renderContainerFarmsHeroContent = () => (
  <div className="hero-intro-wrapper">
    container farms
  </div>
);

export default () => (
  <div>
    <HeadTitle title="Container Farms" />

    {/*<PageLayout title="Farmers">*/}
    <Hero
      backgroundUrl="/static/containers/background.png"
      title="Container Farms"
    >
      {renderContainerFarmsHeroContent()}
    </Hero>
    <main className="main-content">
      <ContainerFarms />

    </main>
  </div>
)