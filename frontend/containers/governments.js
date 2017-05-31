import PageLayout from '../components/PageLayout';
import Hero from '../components/Header/Hero';
import Link from 'next/link';
import Governments from '../components/Governments/Governments';
import HeadTitle from '../components/HeadTitle';

const renderGovernmentsHeroContent = () => (
  <div className="hero-intro-wrapper">
    <img src="/static/governments/globe.png" alt="globe" />

    <p className="-lg">
      We lessen governments' burden <br />
      <strong className="-neutral -xlg">for a better society</strong>
    </p>
  </div>
);

export default () => (
  <div>
    <HeadTitle title="Governments" />

    <Hero
      backgroundUrl="/static/governments/hero-background.jpg"
      title="Governments Services"
    >
      {renderGovernmentsHeroContent()}
    </Hero>
    <main className="main-content">
      <Governments />

    </main>
  </div>
)