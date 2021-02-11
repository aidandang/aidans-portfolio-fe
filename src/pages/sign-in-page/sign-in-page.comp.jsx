import React from 'react'

// components
import { Card, Ul, Li } from '../../components/tag/tag.comp'

const SignIn = () => {
  return <>
    <Card title={'Sign In'} cssClass={'signin__card'}>
      <Ul>
        <Li>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
              <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" placeholder="Password" />
              <small className="form-text text-muted">We'll never share your password with anyone else.</small>
            </div>
            <button type="submit" className="btn btn-primary mb-2">Submit</button>
          </form>
        </Li>
        <Li>Forgot your passsword?</Li>
      </Ul>
    </Card>
  </>
}

export default SignIn