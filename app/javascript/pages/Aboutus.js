import React from "react"
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
        about:"hello"
      },
      {
        name:'Benjamin Geyer',
        image:BenPhoto,
        githubLink:'https://github.com/Benjamin-G',
        linkedInLink:'https://www.linkedin.com/in/benjamin-r-geyer/',
        about:"hello"
    },
    {
        name:'Stephan Bilham',
        image:StephanPhoto,
        githubLink:'https://github.com/stephenbilham',
        linkedInLink:'https://www.linkedin.com/in/srbilham/',
        about:"hello"
    },
    {
        name:'Jesus Ortega',
        image:JesusPhoto,
        githubLink:'https://github.com/Jortega23',
        linkedInLink:'https://www.linkedin.com/in/jesus-codes/',
        about:"hello"
      }
    ]
  }

  render () {
    return (
        <React.Fragment>
          <div className="container">
            <div className="to-center">
            <h2>About SunTracker</h2>
              <p> We have designed a simple tracker system that allows our users to log in daily sun exposure data helping them stay on top of there sun exposure.</p>
              <ul>
                <li>Track and log daily sun exposure</li>
                <li>Recieve daily sun analytics</li>
                <li>Generate graph displaying user sun data</li>
              </ul>
              <hr className="my-4" />
              <div className="text-con">
                <span className="underline-right">Our Team</span>
              </div>
               <div class="row pb-5">
                 {this.state.team.map((member, index)=>(
                       <div className="col-xl-3 col-sm-6" key={index}>
                         <div className="team-card-style-1 mx-auto">
                         <div className="team-card-inner">
                             <div className="team-thumb">
                               <img src={member.image} alt="Team Member Picture" />
                             </div>
                             <h4 className="team-name">{member.name}</h4>
                             <span className="team-position">Programmer</span>
                             <a className="team-contact-link" href="mailto:info@example.com"><i className="fe-icon-mail"></i>&nbsp;info@example.com</a>
                             <hr class="my-4" />
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
