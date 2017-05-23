import PageLayout from '../components/PageLayout';
import Hero from '../components/Header/Hero';
import Challenge from '../components/Challenge/Challenge';
import Link from 'next/link';

const renderChallengeHeroContent = () => (
  <div>
    <p>
      "Modern agriculture, is more resource intensive, very fossil fuel dependent, uses fertilizers, and is based on massive production.
    </p>

    <b>This policy has to change.</b>
    <p>
      Resource scarcity, increased population, decresing land availability and accessibility, emerging water scarcity, and soil degradation require us to re-think how best to use our resources for future generations."
    </p>
    <strong>United Nations</strong>
  </div>
);

export default () => (
  <PageLayout>
    <Hero
      contentImage="/static/challenge/UN.png"
      title="The Challenge"
    >
      {renderChallengeHeroContent()}
    </Hero>
    <Challenge />
  </PageLayout>
)