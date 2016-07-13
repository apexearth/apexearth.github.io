import React from 'react'
export default class Info extends React.Component {
    constructor(props) {
        super()
        this.style = props.style
    }

    render() {
        var info = this.props.cv.Info;
        return (
            <div style={this.style}>
                {createInfo(info.Location, styles.location)}
                {createInfo(info.Email, styles.email)}
                {createInfo(info.CV, styles.cv)}
                {createInfo(info.LinkedIn, styles.linkedIn)}
                {createInfo(info.StackOverflow, styles.stackOverflow)}
                {createInfo(info.GitHub, styles.gitHub)}
            </div>
        )
    }
}

function createInfo(content, imageStyle) {
    return (
        <div style={styles.contentStyle}>
            <div style={imageStyle}>&nbsp;</div>
            {content.startsWith("http") ? <a href={content}>{content}</a> : content}
        </div>
    )
}

var styles = {
    root:          {
        fontSize: "16px"
    },
    contentStyle:  {
        lineHeight:   "30px",
        borderBottom: "1px dashed #ddd"
    },
    location:      iconStyle("i/location.png"),
    email:         iconStyle("i/email.png", 23),
    phone:         iconStyle("i/phone.png"),
    cv:            iconStyle("i/cv.png", 23),
    linkedIn:      iconStyle("i/linkedIn.png", 20),
    stackOverflow: iconStyle("i/stackOverflow.png", 30),
    gitHub:        iconStyle("i/gitHub.svg", 28)
};

function iconStyle(imageUrl, size) {
    size = size || 25;
    return {
        display:                "inline-block",
        verticalAlign:          "middle",
        backgroundImage:        "url('" + imageUrl + "')",
        backgroundRepeat:       "no-repeat",
        backgroundSize:         size + "px " + size + "px",
        backgroundPosition:     "center",
        height:                 30,
        width:                  30,
        marginRight:            15,
        WebkitPrintColorAdjust: "exact"
    }
}