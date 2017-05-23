import PageLayout from '../components/PageLayout';
import Hero from '../components/Header/Hero';
import Link from 'next/link';
import Farmers from '../components/Farmers/Farmers';

const renderFarmersHeroContent = () => (
  <div>
    <img src="/static/farmers/container.png" alt="container"/>

    <p>
      Madar Farms would like to thank all our farmers. Your hard work feeds and sustains us. You share a unique bond with the earth and appreciate how dependent we are on forces of nature.
    </p>
  </div>
);

export default () => (
  <div>
    <PageLayout title="Farmers">
      <Hero
        backgroundUrl="/static/farmers/farmers-background.png"
        title="Farmers Services"
      >
        {renderFarmersHeroContent()}
      </Hero>
      <Farmers />
    </PageLayout>
  </div>
)