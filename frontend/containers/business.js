import PageLayout from '../components/PageLayout';
import Hero from '../components/Header/Hero';
import Link from 'next/link';
import Business from '../components/Business/Business';
import React from 'react';
import HeadTitle from '../components/HeadTitle';
import { connect } from 'react-redux';

const renderBusinessHeroContent = () => (
  <div className="hero-intro-wrapper">
    <img src="/static/business/light.png" alt="container" />

    <p>
      If you are a supermarket, restaurant, food distributor, or are in anyway involved in the F&amp;B industry, you've faced some familiar pain points, and we can help you.
    </p>
  </div>
);



const BusinessPage = () => (
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
);

BusinessPage.getInitialProps = async ({ req }) => {
  // console.log('erere');
  return { temp2: 'ha' }
}

export default BusinessPage;

// const mapStateToProps = (state, ownProps) => {
//   return {
//     temp: state.temp
//   }
// };

// export default connect(mapStateToProps, {})(BusinessPage);