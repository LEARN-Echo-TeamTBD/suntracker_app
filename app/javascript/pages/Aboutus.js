//This is a template, and is still getting worked on


import React from "react"
import Github from './github2.png'

class Aboutus extends React.Component {
 

  render () {
    return (
        <React.Fragment>
               <div className = "member-cards-container">
                 <div className = "member-card">
                  <div className="card mb-3">
                  <h3 className="card-header">
                  </h3>
                  <div className="card-body">
                    <h5 className="card-title" className='member-age'>22</h5>
                  </div>
                  <img style={{height: "auto", width: "100%", display: "block"}} src="https://live.staticflickr.com/68/172629460_f55d8b084d_z.jpg" alt="Card image" />
                  <div className="card-body">
                  <p className="card-text" className='member-enjoys'>name</p>
                  </div>
                  <div className="card-body">
                     <a href="https://github.com/"  target="_blank" class="card-link"><i class="fab fa-github"></i> github</a>
                     <a href="#" class="card-link">Delete</a>
                   </div>
                   <div className="card-footer text-muted">
                   </div>
                </div>
                </div>
        </div>
        </React.Fragment>
    );
  }
}

export default Aboutus
