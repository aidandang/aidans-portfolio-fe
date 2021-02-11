import React from 'react'

// dependencies
import { Switch, Route } from 'react-router-dom'
// components
import Navbar from '../../components/navbar/navbar.comp'
import Footer from '../../components/footer/footer.comp'
import Readme from '../../pages/readme-page/readme-page.comp'
import SignIn from '../../pages/sign-in-page/sign-in-page.comp'

const PublicRoutes = () => {
  return <>
    <div className="container-fluid m-0 p-0">
      <header className="d-flex align-items-start flex-column main-wrapper">
        <Navbar />
        <section className="main-section">
          <div className="row m-0 py-5">
            <div className="col">
              <Switch>
                <Route exact path="/readme" render={() => <Readme />} />
                <Route exact path="/sign-in" render={() => <SignIn />} />
              </Switch>
            </div>
          </div>
        </section>
      </header>
      <Footer />
    </div>
  </>
}

export default PublicRoutes