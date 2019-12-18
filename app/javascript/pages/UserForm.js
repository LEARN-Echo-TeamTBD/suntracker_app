import React from "react"
import { Redirect } from "react-router-dom"

class UserForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            createSuccess:false,
            uvData: null,
            error: null,
            isLoading: true,
            form: {
                hours_in_sun: 0,
                latitude: 0,
                longitude: 0,
                time_of_day: '',
                additional_information: '',
                sun_block_application: false,
                user_id: this.props.user_id,
                uv: 0,
                uv_max: 0,
                safe_exposure_time: 0
            }
        }
    }

    componentDidMount() {
        const getPosition = function (options) {
            return new Promise(function (resolve, reject) {
                navigator.geolocation.getCurrentPosition(resolve, reject, options);
            })
        }
        getPosition()
            .then(({ coords }) => {
                const { latitude, longitude } = coords
                this.setState({
                    form:{
                        ...this.state.form,
                        latitude,
                        longitude
                    }
                })
                this.getUVapi(coords)
            })
            .catch((err) => {
                console.error(err.message)
            }
        )
    }

    getUVapi = ({ latitude, longitude }) => {
        fetch(`/uvindex?uv_api[latitude]=${latitude}&uv_api[longitude]=${longitude}`, {
            method: 'GET',
            headers: {
                "Content-type":"application/json"
            }
        }).then(resp => {
            if(resp.status !== 200){ throw({message: "Could not perform search. Please try again"})}
            return resp.json()
        }).then((data)=>{
            this.setState({
              uvData: data,
              isLoading: false
            })
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
        let {form} = this.state
        form[event.target.name] = event.target.value
        this.setState({form: form})
    }

    handleSubmit = () => {
        let formWithUvData = {...this.state.form}
        formWithUvData.uv = this.state.uvData.result.uv
        formWithUvData.uv_max = this.state.uvData.result.uv_max
        formWithUvData.safe_exposure_time = Object.values(this.state.uvData.result.safe_exposure_time)[this.props.user_skintone-1];
        this.setState({form: formWithUvData});

        fetch(`/users/${this.props.user_id}/uventries`, {
            method: 'POST',
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                uventry: formWithUvData
            })
        }).then(response => {
            if(response.status === 201) {
                this.setState({createSuccess: true})
            }
        })
    }

    createTime (str) {
        const date = new Date(str)
        return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    }

    render () {
        if (this.state.isLoading){
            return (
                <React.Fragment>
                    <div>
                        <h1>Loading...</h1>
                    </div>
                </React.Fragment>
            )
        }

        const {uvData} = this.state
        const safe_exposure_time = Object.values(uvData.result.safe_exposure_time)[this.props.user_skintone-1] || 'No Sun'

        const getSunHours = () =>{
            const { sunset, sunrise } = uvData.result.sun_info.sun_times
            return `Sunrise at ${this.createTime(sunrise)} and Sunset at ${this.createTime(sunset)}.`
        }


        return (
            <React.Fragment>
                { this.state.createSuccess ? <Redirect to="/dashboard" /> : null }
                <div className="dataDispay">
                    <p> Your location : Latitude: {this.state.form.latitude.toFixed(4)}, Longitude: {this.state.form.longitude.toFixed(4)} </p>
                    <p> For your location the {getSunHours()} </p>
                    <p> The Strongest UV index of { uvData.result.uv_max } will be at { this.createTime(uvData.result.uv_max_time) } </p>
                    <p> With the current UV index of { uvData.result.uv }, { (safe_exposure_time/60) <= 24 ? `you can spend ${(safe_exposure_time/60).toFixed(2)} hours in current condition` : "you can enjoy being outside freely!"}</p>
                </div>
                <div className="form-border-center">
                    <h4>
                        Did you apply sun protection today?
                    </h4>
                    <button name='sun_block_application' value={true} type="button" className={
                        this.state.form.sun_block_application == true ? "btn btn-info" : "btn btn-outline-info"
                        } onClick={() => this.handleClick(true)}>Yes</button>
                    <button value={false} type="button" className={
                        this.state.form.sun_block_application == false ? "btn btn-warning" : "btn btn-outline-warning"
                        } onClick={() => this.handleClick(false)}>No</button>

                    <fieldset className="form-group">
                        <legend>Hours of sun exposure</legend>
                        <input name='hours_in_sun' type="range" className="custom-range" id="customRange1" min="0" max="48"
                            value={this.state.form.hours_in_sun}
                            onChange={this.handleChange}/>
                        <output htmlFor="customRange1" >
                            Your sun exposure: {this.state.form.hours_in_sun/2} {this.state.form.hours_in_sun/2 > 1 ? "hours" : "hour"}
                        </output>
                    </fieldset>

                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
                        Submit
                    </button>
                </div>
            </React.Fragment>
        )
    }
}

export default UserForm
