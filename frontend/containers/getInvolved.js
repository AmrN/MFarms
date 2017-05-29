import PageLayout from '../components/PageLayout';
import Hero from '../components/Header/Hero';
import Link from 'next/link';
import HeadTitle from '../components/HeadTitle';
import GetInvolvedHeroContent from '../components/GetInvolved/GetInvolvedHeroContent';
import GetInvolved from '../components/GetInvolved/GetInvolved';

export default () => (
  <div>
    <HeadTitle title="Get Involved" />
    <Hero
      backgroundUrl="/static/get-involved/hero-background.jpg"
      title="Get Involved"
    >
      <GetInvolvedHeroContent />
    </Hero>
    <main className="main-content">
      <GetInvolved />
    </main>
  </div>
)