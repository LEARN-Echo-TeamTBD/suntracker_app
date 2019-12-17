import React from "react"
import Emoji from "./Emoji"

const Feedback = (props) => {
  const current_input = props.data
  const {safe_exposure_time, uv, uv_max, hours_in_sun, sun_block_application} = current_input

  const sunblockMessage = sun_block_application ? "Great job applying sunblock and make sure to re-apply if you plan to stay in the sun!" : "Protect your skin and remember to apply sunblock!"

  const currentUvInfo = (uv) => {
    if (uv <= 2) {
      return {className:"badge badge-success", currentUvMessage:"The risk of getting sunburn is low. However, it is recommended to use sunblock and wear sunglasses 🕶️"}
    } else if (uv <= 7) {
      return {className:"badge badge-warning", currentUvMessage:"There's an increased risk of getting sunburn at this level of UV! To protect your skin, you need protection to stay outside. Seek shade during midday hours, and use sunblock such as sunscreen."}
    } else {
      return {className:"badge badge-danger", currentUvMessage:"You need extra protection to stay outside at this high of UV level! Avoid being outside during midday hours and make sure you seek shade. Shirt, sunscreen and a hat are a must!"}
    }
  }

    return (
    <React.Fragment>
        <h1 className="display-3">Welcome Back!</h1>
        <p className="lead">
          The current UV level is <span className={currentUvInfo(uv).className}>{uv.toFixed(2)}</span>.
        </p>
        <p class="text-muted">{currentUvInfo(uv).currentUvMessage}</p>
        <p className="lead">The maximum UV level for today is <span className={currentUvInfo(uv_max).className}>{uv_max.toFixed(2)}</span>.
        </p>
        <p className="lead">
          Based on your skin tone, your <span className="badge badge-secondary">{hours_in_sun/2}</span> {hours_in_sun/2 <= 1 ? 'hour' : 'hours'} of  sun exposure {hours_in_sun/2 > (safe_exposure_time/60) ? <span className="badge badge-danger">exceeded</span> : <span className="badge badge-success">'is less than'</span>} the healthy amount of <span className="badge badge-secondary">{(safe_exposure_time/60).toFixed(1)}</span> hours.
        </p>
        <p className={sun_block_application ? "text-success" : "text-danger"}> {sunblockMessage}</p>
        <Emoji
        skintone={props.user_skintone}
        current_sun_exposure={hours_in_sun/2}
        max_sun_exposure={safe_exposure_time}
        />
    </React.Fragment>
    )
}

export default Feedback
