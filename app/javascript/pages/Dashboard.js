import React from "react"

import Chart from "../reactcomponents/Chart"
import Feedback from "../reactcomponents/Feedback"

class Dashboard extends React.Component {
  constructor(props){
       super(props)
       this.state = {
         data: [],
         error: null,
         isLoading: false
       }
   }

   componentDidMount() {
     this.setState({isLoading: true})
     fetch(`/users/${this.props.user_id}/uventries`)
         .then((resp) => {
            if (resp.status !== 200) {
            } else {
                return resp.json()
            }
         })
         .then((data) => {
           this.setState({
               data: data,
               isLoading: false
            })
         })
         .catch((error) => {
           this.setState({
               error: `Sorry, there was a problem. ${error.message}`,
               isLoading: false})
         })
   }
  render () {
    if (this.state.isLoading) {
        return (
            <div className="to-center">
                <div>
                    <h1>Loading...</h1>
                </div>
            </div>
        )
    }
    return (

          <div className="to-center">
            {this.state.data.length > 0 &&
            <>
                <Feedback
                    data={this.state.data[this.state.data.length - 1]}
                    user_skintone={this.props.user_skintone}
                    user_cancer_history={this.props.user_cancer_history}
                />
                <Chart data={this.state.data}/>
             </>}
        </div>

    );

  }
}

export default Dashboard
