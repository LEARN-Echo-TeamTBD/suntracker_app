import React from "react"


const LinkButton = (props) => {
    const { href, title } = props
    return (
    <React.Fragment>
        <div>
            <a className="btn btn-full" href={href}>{title}</a>
        </div>
    </React.Fragment>
    )

}

export default LinkButton
