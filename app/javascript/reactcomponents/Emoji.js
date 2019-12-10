import React from "react"


const Emoji = (props) => {
  const severity = Math.floor((props.max_sun_exposure - props.current_sun_exposure)/props.max_sun_exposure * 4 + 0.5)
  console.log(severity);
  const emojiMatrix = [
    ["🥵", "👎🏻", "👍🏻", "🙌🏻"],
    ["🥵", "👎🏻", "👍🏻", "🙌🏻"],
    ["🥵", "👎🏼", "👍🏼", "🙌🏼"],
    ["🥵", "👎🏽", "👍🏽", "🙌🏽"],
    ["🥵", "👎🏾", "👍🏾", "🙌🏾"],
    ["🥵", "👎🏿", "👍🏿", "🙌🏿"],
  ]
  const messageMatrix = [
    'Your emoji is very unhapppy with your behavior please spend less time in the sun and apply for sun screen',
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
            {messageMatrix[severity]}
        </div>

    </React.Fragment>
    )

}

export default Emoji
