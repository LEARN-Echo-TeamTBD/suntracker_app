import React from "react"

import Chart from "../reactcomponents/Chart"
class Dashboard extends React.Component {

  render () {
    return (
        <React.Fragment>
            <div>
                <h1>Dashboard yo page</h1>
            </div>
            <Chart />
        </React.Fragment>
    );
  }
}

export default Dashboard
