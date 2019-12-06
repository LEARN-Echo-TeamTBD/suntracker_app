import React from "react"

class UserForm extends React.Component {

  constructor(props){
      super(props)
      this.state = {
          sun_block_application: false,
          form: {
              hours_in_sun: 0,
              lattitude: 0,
              longitude: 0,
              time_of_day: '',
              additional_information: ''
          }
      }
  }

  handleButton = (event) => {
      this.setState({sun_block_application: event.target.value})
  }

  handleChange = () => {
      let {form} = this.state
      form[event.target.name] = event.target.value
      this.setState({form: form})
  }

  handleSubmit = () => {
      // submit to the handleNewEntry from parent
  }

  render () {
    return (
        <React.Fragment>
        <h1>Traq yo page</h1>
        <div className="form-border-center">
            <h4>Did you apply sun protection today?</h4>
            <button name='sun_block_application' value={true} type="button" className="btn-margin" className="btn btn-outline-info" onClick={this.handleButton}>Yes</button>
            <button value={false} type="button" className=" btn-margin" className="btn btn-outline-info" onClick={this.handleButton}>No</button>

            <fieldset className="form-group">
              <legend>Hours of sun exposure</label>
              <p> (need to fix the default slider position and change it to all the way left or middle) </p>
              </legend>
              <label for="customRange1">Example range</p>
              <input name='hours_in_sun' type="range" className="custom-range" id="customRange1" min='0' max='48' onChange={this.handleChange}/>
              <output for="customRange1" >Your sun exposure: {this.state.form.hours_in_sun/2}</output>
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
                onSubmit={this.handleSubmit}
                >Submit
            </button>
        </div>
        </React.Fragment>
    );
  }
}

export default UserForm
