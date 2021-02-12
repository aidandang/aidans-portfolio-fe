import React from 'react';

// assets
import logo from '../../assets/logo-footer.svg'

// main component
const Footer = () => {
  return (
    <footer id="contact_information" className="footer">
      <div className="row m-0 py-5">
        <div className="col">
          <div className="row">
            <div className="col mb-3">
              <span><a href="/"><img className="footer__logo" src={logo} alt="logo" /></a></span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 my-3">
              <div className="row flex-column align-items-start">
                <div className="col"><h4>Aidan Dang</h4></div>
                <div className="col-8"><small>Dedicated and efficient web developer with a demonstrated history of working in the design industry. Skilled in Web Development, Design and General Management.</small></div>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="row flex-column align-items-start">
                <div className="col"><h4>Contact Me</h4></div>
                <div className="col"><small><a className="footer-a" href="mailto:info@aidandang.com">info@aidandang.com</a></small></div>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="row flex-column align-items-start">
                <div className="col"><h4>Social Media</h4></div>
                <div className="col">
                  <span className="mr-3"><a className="social-media" href="https://www.linkedin.com/in/aidandang/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></span>
                  <span className="mr-3"><a className="social-media" href="https://github.com/aidandang" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <hr className="footer__line"/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <small className="footer__copyright">2021. Aidan's Portfolio Project, <a className="footer-a" href="https://aidandang.com">aidandang.com</a>.</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;