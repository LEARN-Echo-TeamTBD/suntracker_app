import React from "react"
import {Link} from 'react-router-dom'

import GithubLogo from '../../assets/images/GitHub-Mark-64px.png'
import LinkInLogo from '../../assets/images/LI-In-Bug.png'
import JoycePhoto from '../../assets/images/Joyce.png'
import JesusPhoto from '../../assets/images/jesus.jpg'
import BenPhoto from '../../assets/images/ben.jpeg'
import StephanPhoto from '../../assets/images/stephan.jpeg'

class Aboutus extends React.Component {
  state = {
   team:[
      {
        name:'Joyce He',
        image:JoycePhoto,
        githubLink:'https://github.com/jiayu-joyce-he',
        linkedInLink:'https://www.linkedin.com/in/jiayu-joyce-he/',
        email:"jiayuhe@alumni.stanford.edu",
        about:"hello"
      },
      {
        name:'Benjamin Geyer',
        image:BenPhoto,
        githubLink:'https://github.com/Benjamin-G',
        linkedInLink:'https://www.linkedin.com/in/benjamin-r-geyer/',
        email:"brgeyer49@gmail.com",
        about:"hello"
    },
    {
        name:'Stephan Bilham',
        image:StephanPhoto,
        githubLink:'https://github.com/stephenbilham',
        linkedInLink:'https://www.linkedin.com/in/srbilham/',
        email:"jiayuhe@alumni.stanford.edu",
        about:"hello"
    },
    {
        name:'Jesus Ortega',
        image:JesusPhoto,
        githubLink:'https://github.com/Jortega23',
        linkedInLink:'https://www.linkedin.com/in/jesus-codes/',
        email:"jortegs23@gmail.com",
        about:"hello"
      }
    ]
  }

  render () {
    return (
        <React.Fragment>
            <div className="problem-statement">
              <blockquote className="blockquote text-center">
                <p className="mb-0">It is estimated that approximately 9,500 people in the U.S. are diagnosed with skin cancer every day.</p>
                <footer id="cuztomiz-blockquote-footer">-Rogers HW, Weinstock MA, Feldman SR, Coldiron BM. Incidence estimate of nonmelanoma skin cancer (keratinocyte carcinomas) in the US population, 2012. JAMA Dermatol 2015<cite title="Source Title"></cite></footer>
              </blockquote>
              </div>
                <div className="about-sun-tracker">
                  <h2>Our Solution - SunTracker</h2>
                  <p> We have designed a simple tracker system that allows our users to log in daily sun exposure data helping them stay on top of their sun exposure.</p>
                  <p>Users can:</p>
                  <ul>
                    <li>☀️Recieve daily sun analytics</li>
                    <li>⏱️Track and log daily sun exposure</li>
                    <li>📈understand their sun exposure data</li>
                  </ul>
                  <p>and ultimately maintain healthy skin!</p>
                  <Link to="/resources" className="btn btn-primary" >
                  <a>More Resources</a>
                  </Link>
                </div>
              <div className="our-team">
                <h2>Our Team</h2>
              <div className="container">
                <div className="row pb-5">
                 {this.state.team.map((member, index)=>(
                       <div className="col-xl-3 col-sm-6" key={index}>
                         <div className="team-card-style-1 mx-auto">
                         <div className="team-card-inner">
                           <div className="team-thumb">
                             <img src={member.image} alt="Team Member Picture" />
                           </div>
                           <h4 className="team-name">{member.name}</h4>
                           <span className="team-position">Programmer</span>
                           <a className="team-contact-link"><i className="fe-icon-mail"></i>{member.email}</a>
                           <hr className="my-4" />
                            <ul className="team-social-bar-list">
                              <li>
                                <a className="social-btn sb-style-4" href={member.githubLink} title="Github Link" target="_blank">
                                  <img src={GithubLogo} />
                                </a>
                              </li>
                              <li>
                                <a className="social-btn sb-style-4" href={member.linkedInLink} title="Linkedin Link" target="_blank">
                                <img src={LinkInLogo} />
                                </a>
                              </li>
                            </ul>
                           </div>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
        </React.Fragment>
    );
  }
}


export default Aboutus
