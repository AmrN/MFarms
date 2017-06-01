import PageLayout from '../components/PageLayout';
import Hero from '../components/Header/Hero';
import ChallengePage from '../containers/challenge';
import BusinessPage from '../containers/business';
import FarmersPage from '../containers/farmers';
import ServicesPage from '../containers/services';
import ContainerFarmsPage from '../containers/containerFarms';
import GetInvolvedPage from '../containers/getInvolved';
import GovernmentsPage from '../containers/governments';
import Link from 'next/link';
import React, { Component } from 'react';

export default class IndexPage extends Component {

  static async getInitialProps(params) {

    const props = {};
    const queryPage = params.query.page || '';
    const PageContainer = IndexPage.getPage(queryPage);

    if (PageContainer && PageContainer.getInitialProps) {
      return PageContainer.getInitialProps(params)
        .then(res => {
          return Object.assign(props, res);
        });
    }
    return props;
  }

  componentWillReceiveProps(nextProps) {
    this.setPage(nextProps);
  }


  componentWillMount() {
    this.setPage(this.props);
  }

  setPage(props) {
    let Page;
    const queryPage = props.url.query.page || '';
    Page = IndexPage.getPage(queryPage);
    this.Page = Page;
  }

  static getPage(path) {
    let Page;
    path = path || '';

    switch (path) {
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
      case 'governments':
        Page = GovernmentsPage;
        break;
    }
    return Page;
  }

  componentDidMount() {
    // console.log('in componentDidMount');
  }

  render() {
    console.log('props: ', this.props);
    const Page = this.Page;
    if (!Page) {
      return null;
    }
    return (
      <PageLayout>
        <Page {...this.props} />
      </PageLayout>
    );

  }
}