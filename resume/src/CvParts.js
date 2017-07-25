import React from 'react'
import ReactMarkdown from 'react-markdown'

export class Section extends React.Component {
    render() {
        return (
            <div style={{
                marginBottom: 22
            }}>
                {this.props.children}
            </div>
        )
    }
}

export class SectionHeader extends React.Component {
    render() {
        return (
            <div style={{
                display               : "flex",
                alignItems            : "center",
                fontSize              : "15px",
                fontWeight            : "bold",
                color                 : "#ee701d",
                backgroundColor       : "#efefef",
                paddingLeft           : 5,
                paddingTop            : 5,
                paddingBottom         : 2,
                borderBottom          : "solid 3px #e5e5e5",
                marginBottom          : 5,
                WebkitPrintColorAdjust: "exact",
            }}>
                <span style={{marginRight: 15}}>{this.props.children}</span>
            </div>
        )
    }
}

export class Statement extends React.Component {
    render() {
        return (
            <div style={{
                backgroundColor       : "#f1f8ff",
                marginTop             : 10,
                paddingLeft           : 20,
                paddingRight          : 20,
                border                : "solid 1px #dae7f1",
                WebkitPrintColorAdjust: "exact",
            }}>
                <ReactMarkdown source={this.props.children}/>
            </div>
        )
    }
}

export class Line extends React.Component {
    render() {
        var style = {
            height   : 0,
            width    : this.props.width || "100%",
            borderTop: (this.props.height || 1) + "px solid #ccc",
        }
        return (
            <div style={style}>&nbsp;</div>
        )
    }
}