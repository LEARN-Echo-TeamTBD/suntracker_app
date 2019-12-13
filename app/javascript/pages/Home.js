import React from "react"
import Sunlogo from './sunlogo2.png'
import {Link} from 'react-router-dom'



// import LinkButton from "../reactcomponents/LinkButton"


class Home extends React.Component {

  render () {
    return (
          <React.Fragment>
            <div className="homePage">
                  <h1 className="hometitle">SunTracker</h1>
                 <img src={Sunlogo} alt="logo"/>
                    <p className='mission'>Our mission is help promote sun awarness with a simple, fun and interactive system. We encourgae our users to log daily to help track the amount of sun exposure they are recieving on a day to day basis.
                      We display our users there data to help them visually keep track of there exposure, along with providing rescources to help care for there skin.
                    </p>
                    <Link to="/aboutus">
                    <button type="button" className="btn btn-primary btn-lg">About</button>
                    </Link>
            </div>
          </React.Fragment>
    );
  }
}
// <LinkButton href="/" title="Sign In"/>
// <LinkButton href="/" title="Read More"/>
export default Home
