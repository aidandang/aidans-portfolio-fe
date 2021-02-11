import React from 'react';

// assets
import logo from '../../assets/logo-footer.svg'

// main component
const Footer = () => {
  return (
    <footer className="footer">
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
                <div className="col">AIDAN DANG</div>
                <div className="col-8"><small>Experienced Web Developer with a demonstrated history of working in the design industry. Skilled in General Management, Design and Web Development.</small></div>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="row flex-column align-items-start">
                <div className="col">Contact Me</div>
                <div className="col"><small><a className="footer-a" href="mailto:info@aidandang.com">info@aidandang.com</a></small></div>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="row flex-column align-items-start">
                <div className="col">Social Media</div>
                <div className="col">
                  <span className="mr-2"><a className="social-media" href="https://github.com/aidandang"><i className="fab fa-github"></i></a></span>
                  <span className="mr-2"><a className="social-media" href="https://www.linkedin.com/in/aidandang/"><i className="fab fa-linkedin"></i></a></span>
                  <span><a className="social-media" href="https://www.facebook.com/aidan2303"><i className="fab fa-facebook-f"></i></a></span>
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
              <small className="footer__copyright">2020. Monthly Budget Project, <a className="footer-a" href="https://aidandang.com">aidandang.com</a>.</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;