import PageLayout from '../components/PageLayout';
import Hero from '../components/Header/Hero';
import Link from 'next/link';
import Business from '../components/Business/Business';
import React from 'react';
import HeadTitle from '../components/HeadTitle';

const renderBusinessHeroContent = () => (
  <div className="hero-intro-wrapper">
    <img src="/static/business/light.png" alt="container" />

    <p>
      If you are a supermarket, restaurant, food distributor, or are in anyway involved in the F&amp;B industry, you've faced some familiar pain points, and we can help you.
    </p>
  </div>
);

export default () => (
  <div>
    <HeadTitle title="Business" />
    {/*<PageLayout title="Business">*/}
    <Hero
      backgroundUrl="/static/business/hero-background.jpg"
      title="Business Services"
    >
      {renderBusinessHeroContent()}
    </Hero>
    <main className="main-content">
      <Business />
    </main>

    {/*</PageLayout>*/}
  </div>
)