import PageLayout from '../components/PageLayout';
import Hero from '../components/Header/Hero';
import Link from 'next/link';
import Challenge from '../components/Challenge/Challenge';
import HeadTitle from '../components/HeadTitle';

const renderChallengeHeroContent = () => (
  <div>
    <p>
      "Modern agriculture, is more resource intensive, very fossil fuel dependent, uses fertilizers, and is based on massive production.
    </p>

    <p className="stand-out">This policy has to change.</p>
    <p>
      Resource scarcity, increased population, decresing land availability and accessibility, emerging water scarcity, and soil degradation require us to re-think how best to use our resources for future generations."
    </p>
    <p className="stand-out -primary">United Nations</p>
  </div>
);

export default () => (
  <div>
    <HeadTitle />
    <Hero
      backgroundUrl="/static/challenge/challenge-background.jpg"
      contentImage="/static/challenge/UN.png"
      title="The Challenge"
    >
      {renderChallengeHeroContent()}
    </Hero>
    <main className="main-content">
      <Challenge />
    </main>
  </div>
)