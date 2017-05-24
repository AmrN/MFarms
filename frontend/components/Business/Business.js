import React from 'react';
import HorizontalIconsList from '../HorizontalIconsList/HorizontalIconsList';

const weOfferYouIcons = [
  {
    url: '/static/business/price.png',
    text: 'Price stability',
  },
  {
    url: '/static/business/quality.png',
    text: 'Consistent quality',
  },
  {
    url: '/static/business/supply.png',
    text: 'Reliable local supply',
  },
  {
    url: '/static/business/chain.png',
    text: 'Unbroken cold chain supply',
  },
  {
    url: '/static/business/fresh.png',
    text: 'Sustainable fresh produce',
  },
];

const verticalFeaturesIcons = [
  {
    url: '/static/business/around-year.png',
    text: (<p>We can grow 365 days of the year in a controlled environment. The hacked growing cycle guarantees consistent quality and quantity.</p>)
  },
  {
    url: '/static/business/superior.png',
    text: (<p><b>Superior Produce:</b> We grow in sealed environments - so we don't use any nasty chemicals or preservatives. Our sustainable produce is non-GMO, insecticide and pesticide free.</p>)
  },
  {
    url: '/static/business/get-in-touch.png',
    text: (<p>Get in touch with us(<img className="icon" src="/static/footer/mail.png" alt="mail" />) to find out how we can provide you with the highest quality and most sustainable produce, at a stable price. As local suppliers, our clients rely on us to be consistent and responsive to local needs.</p>)
  },
  {
    url: '/static/business/purchase.png',
    text: (<p>Interested in joining the urban farming revolution? You can purchase a Leafy Green Machine (LGM)<sup>TM</sup>. <b><a href="#">Visit shop &rarr;</a></b></p>)
  },
  {
    url: '/static/business/hassle-free.png',
    text: (<p>Don’t want the headache of farming? We can manage your farm and offer you a hassle-free private supply.</p>)
  },
];


const Business = () => {
  return (
    <div className="Business">
      <section className="-white sound-familiar">
        <div className="container sound-familiar-wrapper">
          <div className="copy">
            <h2>Does this sound familiar?</h2>
            <div className="details">
              <p>Are flunctuations in quality, price, or availability hindering your ability to provide the best service to your customers?</p>
              <p>Have you noticed customers are increasingly curious about their food? People increasingly want to know where their food comes from, under what conditions it was grown, and what impact it will have on their health and the environment.</p>
              <p><b>Madar Farms</b> is here to help you solve both problems!</p>
            </div>
          </div>
          <div className="image">
            <img src="/static/business/vege-bowl.png" alt="vege bowl" />
          </div>
        </div>
      </section>

      <section className="-grey -center we-offer-you">
        <div className="container">
          <h2>We offer you</h2>

          <HorizontalIconsList icons={weOfferYouIcons} />
        </div>
      </section>

      <section className="-white vertical-features">
        <div className="container">
          <div className="vertical-features-wrapper">
            <HorizontalIconsList
              icons={verticalFeaturesIcons}
              vertical
              contentHorizontal
            />
          </div>
        </div>
        <div className="cta-wrapper">
          <button>Give us a call</button>
        </div>
      </section>
    </div>
  );
};

export default Business;