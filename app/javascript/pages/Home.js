import React from "react"

// import LinkButton from "../reactcomponents/LinkButton"


class Home extends React.Component {

  render () {
    return (
        <React.Fragment>
            <div className="homePage">
              <div className="hometitle">
                  <h1>SunTracker</h1>
              </div>
              <div className='mission'>
                    <p>Our mission help promote sun awarness with a simple, fun and interactive system. We encourgae our users to log daily to help track the amount of sun exposure they are recieving on a day to day basis.
                      We display our users there data to help them visually keep track of there exposure, along with providing rescources to help care for there skin.
                       </p>
                  </div>
                  <hr></hr>
                  <div className='about'>
                    <h2>About SunTracker</h2>
                      <p> We have designed a simple tracker system that allows our users to log in daily sun exposure data helping them stay on top of there sun exposure.</p>
                          <li>Track and log daily sun exposure</li>
                          <li>Recieve daily sun analytics</li>
                          <li>Generate graph displaying user sun data</li>
                  </div>
            </div>
        </React.Fragment>
    );
  }
}
// <LinkButton href="/" title="Sign In"/>
// <LinkButton href="/" title="Read More"/>
export default Home
