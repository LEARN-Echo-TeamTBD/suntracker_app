import React from "react"
import GithubLogo from '../../assets/images/GitHub-Mark-64px.png'
import JoycePhoto from '../../assets/images/Joyce.jpg'
import JesusPhoto from '../../assets/images/jesus.jpg'
import BenPhoto from '../../assets/images/ben.jpeg'
import StephanPhoto from '../../assets/images/stephan.jpeg'

class Aboutus extends React.Component {
  state = {
   team:[
      {
        name:'Joyce He',
        image:JoycePhoto,
        logo: GithubLogo,
        link:'https://github.com/',
        about:"hello"
      },
      {
        name:'Benjamin Geyer',
        image:BenPhoto,
        logo: GithubLogo,
        link:'https://github.com/',
        about:"hello"
    },
    {
        name:'Stephan Bilham',
        image:StephanPhoto,
        logo: GithubLogo,
        link:'https://github.com/',
        about:"hello"
    },
    {
        name:'Jesus Ortega',
        image:JesusPhoto,
        logo: GithubLogo,
        link:'https://github.com/',
        about:"hello"
    }
    ]
  }

  render () {
    return (
        <React.Fragment>
          <div className="container">
            <div className="to-center">
              <h2>Why SunTracker</h2>
              <hr className="my-4" />
              <div className="text-con">
                <span className="underline-right">Our Team</span>
              </div>
               <div class="row pb-5">
                 {this.state.team.map(member=>(
                       <div className="col-xl-3 col-sm-6">
                         <div className="team-card-style-1 mx-auto">
                         <div className="team-card-inner">
                             <div className="team-thumb">
                               <img src={member.image} alt="Team Member Picture" />
                             </div>
                             <h4 className="team-name">{member.name}</h4>
                             <span className="team-position">Programmer</span>
                             <a className="team-contact-link" href="mailto:info@example.com"><i className="fe-icon-mail"></i>&nbsp;info@example.com</a>
                             <div className="team-social-bar text-center">
                               <a className="social-btn sb-style-4 sb-github" href={member.link}>
                                 <div className="social-icon">
                                 <img src={member.logo} />
                                 </div>
                               </a>
                               <a className="social-btn sb-style-4 sb-github" href="#"><i className="socicon-github"></i></a><a className="social-btn sb-style-4 sb-stackoverflow" href="#"><i className="socicon-stackoverflow"></i></a><a className="social-btn sb-style-4 sb-skype" href="#"><i className="socicon-skype"></i></a></div>
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
