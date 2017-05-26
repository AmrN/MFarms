// import PageLayout from '../components/PageLayout';
import Hero from '../components/Header/Hero';
import Link from 'next/link';
import ServicesHeroContent from '../components/Services/ServicesHeroContent';

export default () => (
  <div>
    {/*<PageLayout title="Services">*/}
    <Hero
      backgroundUrl="/static/services/services-background.png"
      title="Our Services"
    >
      <ServicesHeroContent />
    </Hero>

    {/*</PageLayout>*/}
  </div>
)