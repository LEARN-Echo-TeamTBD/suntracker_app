import React from "react"

import Chart from "../reactcomponents/Chart"
import Feedback from "../reactcomponents/Feedback"

class Dashboard extends React.Component {
  constructor(props){
       super(props)
       this.state = {
         data: null,
         error: null
       }
   }

   componentDidMount() {
     fetch(`/users/${this.props.user_id}/uventries`)
     .then((resp) => {
       return resp.json()
     })
     .then((data) => {
       this.setState({ data: data })
       console.log("this is state", this.state.data);
     })
     .catch((error) => {
       this.setState({ error: `Sorry, there was a problem.  ${error.message}`})
     })
   }

  render () {
    if (this.state.data === null || typeof this.state.data === 'undefined'){
        return (
            <React.Fragment>
                <div>
                    <h1>Loading...</h1>
                </div>
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            {(this.state.data === null || typeof this.state.data === 'undefined') || <Feedback
            data={this.state.data}
            user_skintone={this.props.user_skintone}
            user_cancer_history={this.props.user_cancer_history}
            />}
            <Chart data={this.state.data}/>
        </React.Fragment>
    );
  }
}

export default Dashboard
