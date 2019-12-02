import React from "react"
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom'


// pages
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import UserForm from '../pages/UserForm'
import Resources from '../pages/Resources'


class App extends React.Component {

  render () {
      const{
          logged_in,
          sign_in_route,
          sign_out_route,
      } = this.props

    return (
        <React.Fragment>
            <Router>
                {logged_in &&
                  <div>
                    <a href={sign_out_route}>Sign Out</a>
                  </div>
                }
                {!logged_in &&
                  <div>
                    <a href={sign_in_route}>Sign In</a>
                  </div>
                }

                <div>
                    <h1> Suntracker App </h1>
                    <h2>"..."</h2>
                </div>
                <Link to="/" >Home</Link>
                <Link to="/signup" >Signup</Link>
                <Link to="/dashboard" >Dashboard</Link>
                <Link to="/userform" >UserForm</Link>
                <Link to="/resources" >Resources</Link>

                <Route path="/" exact component={Home} />
                <Route path="/signup" component={Signup} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/userform" component={UserForm} />
                <Route path="/resources" component={Resources} />
            </Router>
        </React.Fragment>
    );
  }
}

export default App
