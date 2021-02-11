import React from 'react'

// dependencies
import { Route, Redirect } from 'react-router-dom'
// components
import { PageRoutes } from '../../state/page/page.data'
// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../state/user/user.selectors'

const AuthRoute = ({ component: Component, currentUser, ...rest }) => { 
  return <>
    <Route
      {...rest}
      render={props => 
        currentUser 
        ? <Component {...props} /> 
        : <Redirect to={PageRoutes.SIGN_IN} />
      }
    />
  </>
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(AuthRoute)