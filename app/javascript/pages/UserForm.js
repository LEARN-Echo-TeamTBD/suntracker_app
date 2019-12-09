import React from "react"
import {Redirect} from "react-router-dom"

class UserForm extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          createSuccess:false,
          form: {
              hours_in_sun: 0,
              lattitude: 0,
              longitude: 0,
              time_of_day: '',
              additional_information: '',
              sun_block_application: false,
              user_id: this.props.user_id
          }
      }
  }

  handleClick = (isTrue) => {
      let {form} = this.state
      form.sun_block_application = isTrue
      this.setState({form: form})
  }

  handleChange = () => {
      const {form} = this.state
      form[event.target.name] = event.target.value
      this.setState({form: form})
  }

  handleSubmit = () => {
      console.log("submit")
      console.log(JSON.stringify({uventry: this.state.form}))
      fetch(`/users/${this.props.user_id}/uventries`, {
          method: 'POST',
          headers: {
              "Content-type":"application/json"
          },
          body: JSON.stringify({uventry:this.state.form})
      }).then(response => {
          console.log(response)
          if(response.status === 201) {
              this.setState({createSuccess: true})
          }
      })
  }

  render () {
    return (
        <React.Fragment>
        {this.state.createSuccess ? <Redirect to="/dashboard" /> : null}
        <h1>Traq yo page</h1>
        <div className="form-border-center">
            <h4>Did you apply sun protection today?</h4>
            <button name='sun_block_application' value={true} type="button"
            className={this.state.form.sun_block_application == true ? "btn btn-info" : "btn btn-outline-info"} onClick={() => this.handleClick(true)}>Yes</button>
            <button value={false} type="button" className={this.state.form.sun_block_application == false ? "btn btn-warning" : "btn btn-outline-warning" }  onClick={() => this.handleClick(false)}>No</button>

            <fieldset className="form-group">
              <legend>Hours of sun exposure</legend>
              <label htmlFor="customRange1">Example range</label>
              <input name='hours_in_sun' type="range" className="custom-range" id="customRange1" min="0" max="48" value={this.state.form.hours_in_sun} onChange={this.handleChange}/>
              <output htmlFor="customRange1" >Your sun exposure: {this.state.form.hours_in_sun/2} {this.state.form.hours_in_sun/2 > 1 ? "hours" : "hour"}</output>
            </fieldset>

            <h4>Additional information</h4>
            <textarea
                name="additional_information"
                className="form-control"
                id="exampleTextarea"
                onChange={this.handleChange}
                rows="3">
            </textarea>

            <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmit}
                >Submit
            </button>
        </div>
        </React.Fragment>
    );
  }
}

export default UserForm
