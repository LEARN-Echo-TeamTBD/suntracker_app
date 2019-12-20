import React from "react"

const Emoji = (props) => {
    const cur = props.current_sun_exposure
    const max = props.max_sun_exposure/60
  let severity = cur < max ? Math.ceil(((max - cur)/max) * 4) - 1 : 0

  const emojiMatrix = [
    ["🔥", "👎🏻", "👍🏻", "🙌🏻"],
    ["🔥", "👎🏻", "👍🏻", "🙌🏻"],
    ["🔥", "👎🏼", "👍🏼", "🙌🏼"],
    ["🔥", "👎🏽", "👍🏽", "🙌🏽"],
    ["🔥", "👎🏾", "👍🏾", "🙌🏾"],
    ["🔥", "👎🏿", "👍🏿", "🙌🏿"],
  ]
  const messageMatrix = [
    'Your emoji is on fire because of your behavior; please spend less time in the sun and apply for sunscreen',
    'Your emoji is unhappy with your current sun exposure please spend more time in the shade',
    "Your emoji is giving you the thumbs up, you're kinda cute for taking care of your skin, good job",
    'Praise the Sun, your ability to take care of your skin is noteworthy and you are a shining example to us all'
  ]
    return (
    <React.Fragment>
        <div>
          <div style={{fontSize:"200px"}}>
            {emojiMatrix[props.skintone -1][severity]}
          </div>
          <blockquote className="text-center">
            <h3>{messageMatrix[severity]}</h3>
            <footer className="blockquote-footer">{`Your ${severity >= 2 ? "happy" : "sad"} skin cells ${severity >= 2 ? "😎" : "🥵"}`}</footer>
          </blockquote>
        </div>
    </React.Fragment>
    )
}

export default Emoji
