import React from 'react';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-links container">
        <a href="#" className="footer-link">
          <img src="/static/footer/contact.png" alt="contact"/>
          Contact Us
        </a>
        <a href="#" className="footer-link">
          <img src="/static/footer/mail.png" alt="mail"/>
          <span>info@madarfarms.co</span>
        </a>
        <a href="#" className="footer-link">
          <img src="/static/footer/products.png" alt="products"/>
          <span>See our products</span>
        </a>
      </div>

      <div className="copyright">
        2017 &copy; Madar Farms. Copyright Reserved | Privacy Plicy
      </div>
    </footer>
  );
};

export default Footer;