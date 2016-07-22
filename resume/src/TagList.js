import React from 'react'

export default class TagList extends React.Component {
    render() {
        var skills = this.props.tags.map(createTag)
        return (
            <div style={styles.root}>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    {skills}
                </div>
            </div>
        )
    }
}

var index = 0
function createTag(text) {
    return <span key={index++} style={styles.tag}>{text}</span>
}

var styles = {
    root: {},
    tag:  {
        color:                  "#376d95",
        backgroundColor:        "#dae7f1",
        textAlign:              "center",
        fontSize:               "11px",
        paddingTop:             4,
        paddingBottom:          5,
        paddingLeft:            5,
        paddingRight:           5,
        border:                 "solid 1px #dae7f1",
        marginTop:              6,
        marginBotom:            6,
        marginRight:            6,
        whiteSpace:             "nowrap",
        WebkitPrintColorAdjust: "exact",
    }
}
