import React from "react"

const Emoji = (props) => {
  const severity = Math.ceil(((props.max_sun_exposure - props.current_sun_exposure)/props.max_sun_exposure) * 4)

  const emojiMatrix = [
    ["🥵", "👎🏻", "👍🏻", "🙌🏻"],
    ["🥵", "👎🏻", "👍🏻", "🙌🏻"],
    ["🥵", "👎🏼", "👍🏼", "🙌🏼"],
    ["🥵", "👎🏽", "👍🏽", "🙌🏽"],
    ["🥵", "👎🏾", "👍🏾", "🙌🏾"],
    ["🥵", "👎🏿", "👍🏿", "🙌🏿"],
  ]
  const messageMatrix = [
    'Your emoji is very unhapppy with your behavior please spend less time in the sun and apply for sunscreen',
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
          <blockquote className="blockquote text-center">
            <p className="mb-0">{messageMatrix[severity]}</p>
            <footer className="blockquote-footer">Your avatar</footer>
          </blockquote>
        </div>

    </React.Fragment>
    )

}

export default Emoji
