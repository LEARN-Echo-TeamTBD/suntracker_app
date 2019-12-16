import React from "react"
import Sunlogo from './sunlogo2.png'
import {Link} from 'react-router-dom'



// import LinkButton from "../reactcomponents/LinkButton"


class Home extends React.Component {

  render () {
    const{sign_in_route} = this.props
    console.log(sign_in_route)
    return (
          <React.Fragment>
            <div className="homePage">
            <h1 className="hometitle">SunTracker</h1>
            <img className="home-logo" src={Sunlogo} alt="logo"/>
               <div className="front-info">
                    <p className='mission'>Our mission is help promote sun awarness with a simple, fun and interactive system. We encourage our users to track the amount of sun exposure they are recieving on a day to day basis.We display our users their data to help them visually keep track of there exposure, along with providing rescources to help care for there skin.
                    </p>
                    <div className="home-buttons">
                      <a className="btn btn-primary" id="left-button" href={sign_in_route}>Sign in</a>
                      <Link to="/aboutus" className="btn btn-outline-primary" id="right-button">
                        About us
                      </Link>
                    </div>
                </div>
            </div>
          </React.Fragment>
    );
  }
}

export default Home
