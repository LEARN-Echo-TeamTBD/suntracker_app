import React from "react"
import {Redirect} from "react-router-dom"

let coordinates = null

class UserForm extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          createSuccess:false,
          uvData: null,
          error: null,
          coordinates: null,
          searchUrl: 'https://api.openuv.io/api/v1/uv?lat=32.76&lng=-117.12',

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

      async componentDidMount() {
          let getPosition = function (options) {
              return new Promise(function (resolve, reject) {
                  navigator.geolocation.getCurrentPosition(resolve, reject, options);
              })
          }
          getPosition()
          .then(({ coords }) => {
              coordinates = coords
              const { latitude, longitude } = coords
              const url = `https://api.openuv.io/api/v1/uv?lat=${latitude}&lng=${longitude}`
              this.getUVData(url)
          })
          .catch((err) => {
              console.error(err.message)
          })
      }

      getUVData = (searchUrl) => {
           fetch(searchUrl, {
                  method: 'GET',
                  headers: {
                      'x-access-token': 'de93a608c1807aff817033670c4c3b28',
                      'Content-Type': 'application/json'
                  }
              }).then((resp)=>{
                  if(resp.status !== 200){ throw({message: "Could not perform search. Please try again"})}
                return resp.json()
              })
              .then((data)=>{
                this.setState({ uvData: data })
              })
              .catch((error)=>{
                this.setState({ error: `Sorry, there was a problem.  ${error.message}`})
              })
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
          body: JSON.stringify({uventry: this.state.form})
      }).then(response => {
          console.log(response)
          if(response.status === 201) {
              this.setState({createSuccess: true})
          }
      })
  }

  render () {
        const { uvData } = this.state
            if (uvData === null || typeof uvData.result === 'undefined'){
                return (
                    <React.Fragment>
                        <div>
                            <h1>Loading...</h1>
                        </div>
                    </React.Fragment>
                )
            }
        console.log('1:',this.state.uvData)
        const { uv, uv_max, safe_exposure_time } = this.state.uvData.result
        console.log('2:',
            {
                uventry:
                    {
                        ...this.state.form,
                        uv,
                        uv_max,
                        safe_exposure_time
                    }
            }
        )


        const currentUserMaxSun = Object.values(uvData.result.safe_exposure_time)[this.props.user_skintone-1]
        const { sunset, sunrise } = uvData.result.sun_info.sun_times
        const sunTime = new Date(sunrise)
        let getDayHours = sunTime.getHours()

        const getSunHours = () =>{
                const up = new Date(sunrise).getHours()
                const down = new Date(sunset).getHours()
            return (`Sun rise in ${up} hours, Sunset in ${down} hours`)
        }
        console.log(getSunHours())


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
        <div className="dataDispay">
            <h3>
                Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}
            </h3>
            <h3>
                Strongest UV Index of day: {uvData.result.uv_max}</h3>
            <h3>
                Uv-max-time: (time of day when strongest) {uvData.result.uv_max_time}
            </h3>
            <h3>
                Current Uv Index: {uvData.result.uv}
            </h3>
            <h3>
                safe_exposure_time: {currentUserMaxSun}
            </h3>
            <h3>
                {getSunHours()}
            </h3>
        </div>
        </React.Fragment>
    );
  }
}

export default UserForm
