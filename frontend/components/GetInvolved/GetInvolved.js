import React from 'react';
import HorizontalIconsList from '../HorizontalIconsList/HorizontalIconsList';
import FollowUs from './FollowUs';

const needHelpIcons = [
  {
    url: '/static/get-involved/inform.png',
    text: 'Inform consumers about hydroponic farming'
  },
  {
    url: '/static/get-involved/awareness.png',
    text: 'Increase awareness about food and water security'
  },
  {
    url: '/static/get-involved/encourage.png',
    text: 'Encourage consumers to buy local and sustainably grown produce'
  },
];

const stepsToTakeIcons = [
  {
    url: '/static/get-involved/follow.png',
    text: (
      <div>
        <p>
          Follow us on social media and join the conversation
        </p>
        <FollowUs />
      </div>
    )
  },
  {
    url: '/static/get-involved/buy.png',
    text: (
      <p>
        Buy our hydroponic produce.
        <br />
        <a href="#">Check our market list &rarr;</a>
      </p>
    )
  },
  {
    url: '/static/get-involved/connect.png',
    text: 'Connect us with farmers or enthusiasts who we can help transition to hydroponics'
  },
  {
    url: '/static/get-involved/educational.png',
    text: "Know someone who'd benefit from learning more?  Refer our educational programs for schools, universities or anywhere looking to learn from a sustainable intervention!"
  },
]

const GetInvolved = () => {
  return (
    <div className="GetInvolved">
      <section className="-white -center">
        <h2>We need your help to:</h2>
        <div className="container">
          <HorizontalIconsList
            icons={needHelpIcons}
          />
        </div>
      </section>

      <section className="-grey -center">
        <h2>Here are steps you can take:</h2>
        <div className="container">
          <HorizontalIconsList
            icons={stepsToTakeIcons}
            contentHorizontal
            contentHorizontalMobileWrap
            baseItemWidth="450px"
          />
        </div>
      </section>

      <section className="-grey -center">
        <div className="container">
          <p className="-xlg"><strong>Are you curious about our products and services?</strong></p>
          <p className="-xlg">
            Contact us (<img className="icon" src="/static/footer/mail.png" alt="mail" />) to explore how we can add value and fulfill your unique needs.
          </p>
          <button className="cta">
            Give us a call
          </button>

        </div>

      </section>
    </div>
  );
};

export default GetInvolved;