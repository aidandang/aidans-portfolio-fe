import React from 'react'

// assets
import logo from '../../assets/logo.svg'
import NavbarMenu from './navbar-menu.comp'
import NavbarUser from './navbar-user.comp'
import NavbarDropdown from './navbar-dropdown.comp'

const Navbar = ({
  isLandingPage
}) => {
  
  return <>
    <nav className={`sticky-top nav-custom ${isLandingPage ? 'nav-custom--landing' : 'nav-custom--standard'}`}>
      <div className="row m-0 py-3 justify-content-between align-items-center">
        <div className="col d-md-none text-left">
          <a  
            data-toggle="collapse" 
            href="#multiCollapse" 
            role="button" 
            aria-expanded="false" 
            aria-controls="multiCollapse"
            className="nav-custom__link"
          >
            <i className="fas fa-bars fa-lg"></i>
          </a>
        </div>
        <div className="col d-md-none text-center">
          <a href="/"><img className="nav-custom__logo" src={logo} alt="logo" /></a>
        </div>
        <div className="col d-md-none text-right">
          <NavbarUser />
        </div>
        <div className="col-12 d-none d-md-block text-center">
          <div className="row align-items-center">
            <div className="col d-none d-md-block text-md-left">
              <span className="mr-4"><a href="/"><img src={logo} width="32" alt="logo" /></a></span>
            </div>
            <div className="col d-none d-md-block text-md-right">
              <NavbarMenu />
              <NavbarUser /> 
            </div>
          </div>
        </div>
      </div>
      <div className="row p-0 m-0 collapse multi-collapse d-md-none" id="multiCollapse">
        <NavbarDropdown />
      </div>
    </nav>
  </>
}

export default Navbar;