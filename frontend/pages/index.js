import PageLayout from '../components/PageLayout';
import Hero from '../components/Header/Hero';
import ChallengePage from '../containers/challenge';
import BusinessPage from '../containers/business';
import FarmersPage from '../containers/farmers';
import ServicesPage from '../containers/services';
import ContainerFarmsPage from '../containers/containerFarms';
import GetInvolvedPage from '../containers/getInvolved';
import Link from 'next/link';
import React, { Component } from 'react';

export default class IndexPage extends Component {

  static async getInitialProps({ query }) {
    // let Page;
    // switch (query.page) {
    //   case 'business':
    //     Page = BusinessPage;
    //     break;
    // }
    // // console.log(Page);
    // return { Page };
    return {};
  }

  componentWillReceiveProps(nextProps) {
    this.setPage(nextProps);
    // console.log('in componentWillReceiveProps');
  }


  componentWillMount() {
    // console.log(this.props);

    this.setPage(this.props);
    // console.log('in componentWillMount');
  }

  setPage(props) {
    let Page;
    const queryPage = props.url.query.page || '';

    switch (queryPage) {
      case '':
        Page = ChallengePage;
        break;
      case 'challenge':
        Page = ChallengePage;
        break;
      case 'business':
        Page = BusinessPage;
        break;
      case 'farmers':
        Page = FarmersPage;
        break;
      case 'services':
        Page = ServicesPage;
        break;
      case 'container': 
        Page = ContainerFarmsPage;
        break;
      case 'get-involved':
        Page = GetInvolvedPage;
        break;
    }
    console.log(Page);
    this.Page = Page;
  }

  componentDidMount() {
    // console.log('in componentDidMount');
  }

  render() {
    // console.log('in render');
    // console.log('props: ', this.props);
    const Page = this.Page;
    if (!Page) {
      return null;
    }
    return (
      <PageLayout>
        <Page />
      </PageLayout>
    );

  }
}
/*() => (
  <PageLayout>
    <Hero
      backgroundUrl="/static/challenge/challenge-background.jpg"
      contentImage="/static/challenge/UN.png"
      title="The Challenge"
    >
      {renderChallengeHeroContent()}
    </Hero>
    <Challenge />
  </PageLayout>
)*/