import React from "react"
import { Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarClassName: true,
            expanded: false,
            navbarDivClassName: true
        }
    }

    handleClick = (e) => {
      e.preventDefault(); //test it out without default to learn what it does
      this.setState((state) => {
          return {
              navbarClassName: !this.state.navbarClassName,
              expanded: false,
              navbarDivClassName: !this.state.navbarDivClassName
          }
      })
    }

  render () {
      const {
         logged_in,
         sign_in_route,
         sign_out_route,
         sign_up_route
           } = this.props
    return (
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink className="navbar-brand" to="/" tag={Link}>Home</NavLink>
            <button
                className={this.state.navbarClassName ? "navbar-toggler collapsed" : "navbar-toggler"} type="button"
                data-toggle="collapse"
                data-target="#navbarColor01"
                aria-controls="navbarColor01"
                aria-expanded={this.state.expanded ? "false" : "true"}
                aria-label="Toggle navigation"
                onClick={this.handleClick}>

                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={this.state.navbarDivClassName ? "navbar-collapse collapse" : "navbar-collapse collapse show"} id="navbarColor01">
            <ul className="navbar-nav mr-auto">
            {!logged_in ? null:
              <li className="nav-item active" onClick={this.handleClick}>
                <NavLink className="nav-link" tag={Link} to="/userform">Your Logger <span className="sr-only" >(current)</span></NavLink>
              </li>}

              {!logged_in ? null:
              <li className="nav-item" onClick={this.handleClick}>
                <NavLink className="nav-link" tag={Link} to="/dashboard" >Dashboard</NavLink>
              </li>}

              <li className="nav-item" onClick={this.handleClick}>
                <NavLink className="nav-link" tag={Link} to="/resources">Resources</NavLink>
              </li>
              <li className="nav-item" onClick={this.handleClick}>
                <NavLink className="nav-link" tag={Link} to="/aboutus">About Us</NavLink>
              </li>
              <li className="nav-item">
                      {!logged_in &&
                          <a className="nav-link active" id="logged_in" href={sign_up_route}>Sign Up<span className="sr-only" >(current)</span></a>
                      }
                </li>
              <li className="nav-item">
                      {
                        logged_in &&
                          <a className="nav-link" id="logged_in" href={sign_out_route}>Sign Out</a>
                      }
                      {!logged_in &&
                          <a className="nav-link active" id="logged_in" href={sign_in_route}>Sign In<span className="sr-only" >(current)</span></a>
                      }

              </li>
            </ul>
            </div>
        </nav>
        </React.Fragment>
    );
  }
}

export default Header
