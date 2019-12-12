import React from "react"
import Emoji from "./Emoji"

const Feedback = (props) => {
  const current_sun_exposure = 2
  const max_sun_exposure = 10
  const skintone=6
    return (
    <React.Fragment>
          <h1>Based on your skin tone, (skintone emoji), your {current_sun_exposure} hours of sun exposure exceeded the healthy amount of {max_sun_exposure} hours. Make sure to re-apply sunblock!</h1>
          <Emoji skintone={skintone} current_sun_exposure={current_sun_exposure} max_sun_exposure={max_sun_exposure}/>
    </React.Fragment>
    )

}

export default Feedback
