import React from 'react'

// components
import Navbar from '../../components/navbar/navbar.comp'
import Footer from '../../components/footer/footer.comp'

const LandingPage = () => {
  return <>
    <div className="container-fluid m-0 p-0">
      <header className="header d-flex align-items-start flex-column">
        <Navbar isLandingPage={true} />
        <div className="mt-auto">
          <div className="row m-0 p-0">
            <div className="col pb-3">
              <span className="header__modelandphoto">
                Model: <a href="https://www.instagram.com/austindistel/">@austindistel</a>, Photographer: <a href="https://www.instagram.com/breeandstephen/">@breeandstephen</a>
              </span>
            </div>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  </>
}

export default LandingPage;