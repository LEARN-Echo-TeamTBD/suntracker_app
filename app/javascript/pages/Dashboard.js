import React from "react"

import Chart from "../reactcomponents/Chart"
import Feedback from "../reactcomponents/Feedback"

class Dashboard extends React.Component {
  constructor(props){
       super(props)
       this.state = {
         combinedData: [],
         error: null
       }
   }

   componentDidMount() {
     fetch(`/users/${this.props.user_id}/uventries`)
     .then((resp) => {
       return resp.json()
     })
     .then((data) => {
       this.setState({ combinedData: data })
       console.log("this is data", data);
       console.log("this is state", this.state.combinedData);
     })
     .catch((error) => {
       this.setState({ error: `Sorry, there was a problem.  ${error.message}`})
     })
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
