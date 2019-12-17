import React from "react"
import Emoji from "./Emoji"

const Feedback = (props) => {
  const current_input = props.data
  const {safe_exposure_time, uv, uv_max, hours_in_sun, sun_block_application} = current_input

  const message = sun_block_application ? "Great job applying sunblock and make sure to re-apply if you plan to stay in the sun!" : "Protect your skin and remember to apply sunblock!"
    return (
    <React.Fragment>
        <h1 className="display-3">Welcome Back!</h1>
        <p className="lead">
          The current UV level is <span className="badge badge-secondary">{uv.toFixed(2)}</span>, and the maximum UV level for today is <span className="badge badge-secondary">{uv_max.toFixed(2)}</span>.
        </p>
        <p className="lead">
          Based on your skin tone, your <span className="badge badge-secondary">{hours_in_sun}</span> {hours_in_sun <= 1 ? 'hour' : 'hours'} of  sun exposure {hours_in_sun > (safe_exposure_time/60) ? 'exceeded' : 'is less than'} the healthy amount of <span className="badge badge-secondary">{(safe_exposure_time/60).toFixed(1)}</span> hours.
        </p>
        <p className={sun_block_application ? "text-success" : "text-danger"}> {message}</p>
        <Emoji
        skintone={props.user_skintone}
        current_sun_exposure={hours_in_sun}
        max_sun_exposure={safe_exposure_time}
        />
    </React.Fragment>
    )
}

export default Feedback
