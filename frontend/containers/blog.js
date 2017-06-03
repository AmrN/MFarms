import PageLayout from '../components/PageLayout';
import Hero from '../components/Header/Hero';
import Link from 'next/link';
import React from 'react';
import HeadTitle from '../components/HeadTitle';
import { connect } from 'react-redux';
import { loadPost, loadPosts } from '../actions';
/*const renderBusinessHeroContent = () => (
  <div className="hero-intro-wrapper">
    <img src="/static/business/light.png" alt="container" />

    <p>
      If you are a supermarket, restaurant, food distributor, or are in anyway involved in the F&amp;B industry, you've faced some familiar pain points, and we can help you.
    </p>
  </div>
);*/



const BlogPage = ({ blog }) => {
  console.log('blog: ', blog);
  return (
    <div>
      <HeadTitle title="Blog" />
      {/*<PageLayout title="Business">*/}
      {/*<Hero
      backgroundUrl="/static/business/hero-background.jpg"
      title="Business Services"
    >
      {renderBusinessHeroContent()}
    </Hero>*/}
      <main className="main-content">
        {blog && blog.one && blog.one.data && (
          <h2>{blog.one.data.title}</h2>
        )}
        {blog && blog.many && blog.many.data && blog.many.data.data.map(post => (
          <h3 key={post.id}>{post.title}</h3>
        ))}


      </main>

      {/*</PageLayout>*/}
    </div>
  );
}


BlogPage.getInitialProps = async ({ store }) => {
  // console.log('erere');
  return Promise.all([
    new Promise((resolve, reject) => {
      store.dispatch(loadPost("591e9bfe718d931f1cb30a42", resolve, reject));
    }),
    new Promise((resolve, reject) => {
      store.dispatch(loadPosts(undefined, resolve, reject));
    })
  ])
    .then(res => {
      return {};
    });
};

// export default BusinessPage;

const mapStateToProps = (state, ownProps) => {
  return {
    blog: state.blog
  }
};

export default connect(mapStateToProps, {})(BlogPage);