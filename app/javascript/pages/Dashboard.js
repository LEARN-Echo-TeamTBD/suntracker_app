import React from "react"

import Chart from "../reactcomponents/Chart"
import Feedback from "../reactcomponents/Feedback"

class Dashboard extends React.Component {
    constructor(props){
       super(props)
       this.state = {
       }
   }
  render () {
    return (
        <React.Fragment>
            <div>
                <h3>
                    dashboard
                </h3>
            </div>
            <Feedback />
            <Chart />
        </React.Fragment>
    );
  }
}

export default Dashboard
