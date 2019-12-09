import React from "react"

class UserForm extends React.Component {

  constructor(props){
      super(props)
      this.state = {
          createSuccess:false,
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

  handleClick = (isTrue) => {
      this.setState({sun_block_application: isTrue})
  }

  handleChange = () => {
      const {form} = this.state
      form[event.target.name] = event.target.value
      this.setState({form: form})
  }

  handleSubmit = () => {
      // submit to the handleNewEntry from parent and clear the input form;
      // need to implement handleNewEntry in parent

      // const { form } = this.state
      // this.props.handleNewEntry(form)
      // .then( () => {
      //     this.setState({
      //         createSuccess:false,
      //         sun_block_application: false,
      //         form: {
      //             hours_in_sun: 0,
      //             lattitude: 0,
      //             longitude: 0,
      //             time_of_day: '',
      //             additional_information: ''
      //         }
      //     })
      // })
  }

  render () {
      console.log(this.state.sun_block_application);
    return (
        <React.Fragment>
        <h1>Traq yo page</h1>
        <div className="form-border-center">
            <h4>Did you apply sun protection today?</h4>
            <button name='sun_block_application' value={true} type="button"
            className={this.state.sun_block_application == true ? "btn btn-info" : "btn btn-outline-info"} onClick={() => this.handleClick(true)}>Yes</button>
            <button value={false} type="button" className={this.state.sun_block_application == false ? "btn btn-warning" : "btn btn-outline-warning" }  onClick={() => this.handleClick(false)}>No</button>

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
                onSubmit={this.handleSubmit}
                >Submit
            </button>
        </div>
        </React.Fragment>
    );
  }
}

export default UserForm
