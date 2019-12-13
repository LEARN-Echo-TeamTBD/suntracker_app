import React from "react"
import GithubLogo from '../../assets/images/GitHub-Mark-64px.png'
import JoycePhoto from '../../assets/images/Joyce.jpg'


class Aboutus extends React.Component {


  render () {
    return (
        <React.Fragment>
          <div className="container">
            <div className="to-center">
              <h2>Our product</h2>
              <hr class="my-4" />
              <div class="text-con">
                <span class="underline-right">Our Team</span>
              </div>
            </div>
                <div className="row pb-5">
                  <div className="col-xl-3 col-sm-6">
        						<div className="team-card-style-1">
        						<div className="team-card-inner">
                        <div className="team-thumb">
                          <img src={JoycePhoto} alt="Team Member Picture" />
                        </div>
        								<h4 className="team-name">William Smith</h4>
        								<span className="team-position">Lead Programmer</span>
        								<a className="team-contact-link" href="mailto:info@example.com"><i className="fe-icon-mail"></i>&nbsp;info@example.com</a>
                        <div className="team-social-bar text-center">
                          <a className="social-btn sb-style-4 sb-github" href="github.com">
                            <div className="social-icon">
                            <img src={GithubLogo} />
                            </div>
                          </a>
                          <a className="social-btn sb-style-4 sb-github" href="#"><i className="socicon-github"></i></a><a className="social-btn sb-style-4 sb-stackoverflow" href="#"><i className="socicon-stackoverflow"></i></a><a className="social-btn sb-style-4 sb-skype" href="#"><i className="socicon-skype"></i></a></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-sm-6">
        						<div className="team-card-style-1">
        						<div className="team-card-inner">
                        <div className="team-thumb">
                          <img src="https://demo.createx.studio/createx/img/team/style-1/01.jpg" alt="Team Member Picture" />
                        </div>
        								<h4 className="team-name">William Smith</h4>
        								<span className="team-position">Lead Programmer</span>
        								<a className="team-contact-link" href="mailto:info@example.com"><i className="fe-icon-mail"></i>&nbsp;info@example.com</a>
                        <div className="team-social-bar text-center">
                          <a className="social-btn sb-style-4 sb-github" href="github.com">
                            <div className="social-icon">
                            <img src={GithubLogo} />
                            </div>
                          </a>
                          <a className="social-btn sb-style-4 sb-github" href="#"><i className="socicon-github"></i></a><a className="social-btn sb-style-4 sb-stackoverflow" href="#"><i className="socicon-stackoverflow"></i></a><a className="social-btn sb-style-4 sb-skype" href="#"><i className="socicon-skype"></i></a></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-sm-6">
        						<div className="team-card-style-1">
        						<div className="team-card-inner">
                        <div className="team-thumb">
                          <img src="https://demo.createx.studio/createx/img/team/style-1/01.jpg" alt="Team Member Picture" />
                        </div>
        								<h4 className="team-name">William Smith</h4>
        								<span className="team-position">Lead Programmer</span>
        								<a className="team-contact-link" href="mailto:info@example.com"><i className="fe-icon-mail"></i>&nbsp;info@example.com</a>
                        <div className="team-social-bar text-center">
                          <a className="social-btn sb-style-4 sb-github" href="github.com">
                            <div className="social-icon">
                            <img src={GithubLogo} />
                            </div>
                          </a>
                          <a className="social-btn sb-style-4 sb-github" href="#"><i className="socicon-github"></i></a><a className="social-btn sb-style-4 sb-stackoverflow" href="#"><i className="socicon-stackoverflow"></i></a><a className="social-btn sb-style-4 sb-skype" href="#"><i className="socicon-skype"></i></a></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-sm-6">
        						<div className="team-card-style-1">
        						<div className="team-card-inner">
                        <div className="team-thumb">
                          <img src="https://demo.createx.studio/createx/img/team/style-1/01.jpg" alt="Team Member Picture" />
                        </div>
        								<h4 className="team-name">William Smith</h4>
        								<span className="team-position">Lead Programmer</span>
        								<a className="team-contact-link" href="mailto:info@example.com"><i className="fe-icon-mail"></i>&nbsp;info@example.com</a>
                        <div className="team-social-bar text-center">
                          <a className="social-btn sb-style-4 sb-github" href="github.com">
                            <div className="social-icon">
                            <img src={GithubLogo} />
                            </div>
                          </a>
                          <a className="social-btn sb-style-4 sb-github" href="#"><i className="socicon-github"></i></a><a className="social-btn sb-style-4 sb-stackoverflow" href="#"><i className="socicon-stackoverflow"></i></a><a className="social-btn sb-style-4 sb-skype" href="#"><i className="socicon-skype"></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </React.Fragment>
    );
  }
}

export default Aboutus
