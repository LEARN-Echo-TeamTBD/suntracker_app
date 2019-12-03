import React from "react"
import { BrowserRouter as  Router, Route, Link, Switch } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap';
// import "bootswatch/dist/united/bootstrap.min.css";



// pages
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import UserForm from '../pages/UserForm'
import Resources from '../pages/Resources'
import Aboutus from '../pages/Aboutus'

//React Components
import Header from '../reactcomponents/Header'



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
                <Header {...this.props} />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/userform" component={UserForm} />
                    <Route path="/resources" component={Resources} />
                    <Route path="/aboutus" component={Aboutus} />
                </Switch>
            </Router>
        </React.Fragment>
    );
  }
}

export default App
