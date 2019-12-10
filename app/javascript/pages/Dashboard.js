import React from "react"

import Chart from "../reactcomponents/Chart"
import Feedback from "../reactcomponents/Feedback"

class Dashboard extends React.Component {

  render () {
    return (
        <React.Fragment>
            <div>
                <h1>Dashboard yo page</h1>
            </div>
            <Feedback />
            <Chart />
        </React.Fragment>
    );
  }
}

export default Dashboard
