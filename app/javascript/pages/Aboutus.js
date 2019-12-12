import React from "react"
import GithubLogo from '../../assets/images/GitHub-Mark-64px.png'

class Aboutus extends React.Component {


  render () {
    return (
        <React.Fragment>
          <div className="container">
                <div className="row pb-5">
                  <div className="col-xl-3 col-sm-6">
        						<div className="team-card-style-1">
        						<div className="team-card-inner">
                        <div className="team-thumb">
                          <img src="https://demo.createx.studio/createx/img/team/style-1/01.jpg" alt="Team Member Picture" />
                        </div>
        								<h4 className="team-name">William Smith</h4>
        								<span className="team-position">Lead Programmer</span>
        								<a className="team-contact-link" href="tel:+19871625346"><i className="fe-icon-phone"></i>&nbsp;+1 (987) 162 53 46</a><a className="team-contact-link" href="mailto:info@example.com"><i className="fe-icon-mail"></i>&nbsp;info@example.com</a>
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
                    <div className="team-card-style-1 mx-auto">
                      <div className="team-card-inner">
                        <div className="team-thumb"><img src="https://demo.createx.studio/createx/img/team/style-1/02.jpg" alt="Team Member Picture" />
                        </div>
                        <div className="team-social-bar text-center"><a className="social-btn sb-style-4 sb-facebook" href="#"><i className="socicon-facebook"></i></a><a className="social-btn sb-style-4 sb-github" href="#"><i className="socicon-twitter"></i></a><a className="social-btn sb-style-4 sb-google-plus" href="#"><i className="socicon-googleplus"></i></a><a className="social-btn sb-style-4 sb-linkedin" href="#"><i className="socicon-linkedin"></i></a></div><a className="team-contact-link" href="tel:+57872336590"><i className="fe-icon-phone"></i>&nbsp;+5 (787) 233 65 90</a><a className="team-contact-link" href="mailto:info@example.com"><i className="fe-icon-mail"></i>&nbsp;info@example.com</a>
                      </div><span className="team-position">Marketing Manager</span>
                      <h4 className="team-name">Samantha Palson</h4>
                    </div>
                  </div>

                  <div className="col-xl-3 col-sm-6">
                    <div className="team-card-style-1 mx-auto">
                      <div className="team-card-inner">
                        <div className="team-thumb"><img src="https://demo.createx.studio/createx/img/team/style-1/03.jpg" alt="Team Member Picture" />
                        </div>
                        <div className="team-social-bar text-center"><a className="social-btn sb-style-4 sb-github" href="#"><i className="socicon-twitter"></i></a><a className="social-btn sb-style-4 sb-pinterest" href="#"><i className="socicon-pinterest"></i></a><a className="social-btn sb-style-4 sb-behance" href="#"><i className="socicon-behance"></i></a><a className="social-btn sb-style-4 sb-dribbble" href="#"><i className="socicon-dribbble"></i></a></div><a className="team-contact-link" href="tel:+13907765843"><i className="fe-icon-phone"></i>&nbsp;+1 (390) 776 58 43</a><a className="team-contact-link" href="mailto:info@example.com"><i className="fe-icon-mail"></i>&nbsp;info@example.com</a>
                      </div><span className="team-position">Graphic Designer</span>
                      <h4 className="team-name">Emma Johnson</h4>
                    </div>
                  </div>

                  <div className="col-xl-3 col-sm-6">
                    <div className="team-card-style-1 mx-auto">
                      <div className="team-card-inner">
                        <div className="team-thumb"><img src="https://demo.createx.studio/createx/img/team/style-1/04.jpg" alt="Team Member Picture" />
                        </div>
                        <div className="team-social-bar text-center"><a className="social-btn sb-style-4 sb-facebook" href="#"><i className="socicon-facebook"></i></a><a className="social-btn sb-style-4 sb-github" href="#"><i className="socicon-twitter"></i></a><a className="social-btn sb-style-4 sb-skype" href="#"><i className="socicon-skype"></i></a><a className="social-btn sb-style-4 sb-linkedin" href="#"><i className="socicon-linkedin"></i></a></div><a className="team-contact-link" href="tel:+72056557984"><i className="fe-icon-phone"></i>&nbsp;+7 (205) 655 79 84</a><a className="team-contact-link" href="mailto:info@example.com"><i className="fe-icon-mail"></i>&nbsp;info@example.com</a>
                      </div><span className="team-position">CEO, Co-Founder</span>
                      <h4 className="team-name">James McCorvinus</h4>
                    </div>
                  </div>
                </div>

              </div>
        </React.Fragment>
    );
  }
}

export default Aboutus
