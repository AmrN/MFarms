import React from 'react';

const Governments = () => {
  return (
    <div className="Governments">
      <section className="-white we-understand">
        <div className="container">
          <div className="side-by-side">
            <div className="left">
              <h2>We understand</h2>
              <p>We understand the political, economic, and social necessity of food and water security. We operate in conditions taht place an ever-increasing pressure on dwindling natural resources. With climate change and population growth we are racing against time to take tangible actions to realize food and water security. <strong>This is where we come in.</strong></p>
            </div>

            <div className="right">
              <img src="/static/governments/graph.png" alt="graph" />
            </div>
          </div>
        </div>
      </section>

      <section className="-grey we-can-help">
        <div className="container">
          <div className="side-by-side">
            <div className="left">
              <img src="/static/governments/madar.png" alt="madar" />
            </div>

            <div className="right -column-first">
              <h2>We can help</h2>
              <p>Madar Farms has the <strong>capacity</strong>,<strong>experience</strong>, and <strong>expertise</strong> necessary to coordinate with government departments and help your country become food and water secure. We deliver <strong>feasible solutions</strong> within <strong>strict deadlines</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="-white -center">
        <div className="container copy-wrapper">
          <p className="-xlg"><strong>We are committed to bringing our learnings to the region with you.</strong></p>
          <p className="-xlg">
            <strong className="-neutral">
            Contact our Government Team (<img className="icon" src="/static/footer/mail.png" alt="mail" />) to learn how we can quickly and meaningfully create impact together.
            </strong>
          </p>
          <button className="cta">
            Give us a call
          </button>

        </div>
      </section>

    </div>
      );
};

export default Governments;