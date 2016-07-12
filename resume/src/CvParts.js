import React from 'react'
import ReactMarkdown from 'react-markdown'

export class Section extends React.Component {
    render() {
        return (
            <div style={{
                marginTop: 20,
                marginBottom: 30
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
                display: "flex",
                alignItems: "center",
                fontSize: "15px",
                fontWeight: "bold",
                color: "#f48024",
                marginBottom: 5
            }}>
                <span>{this.props.children}</span>
                <Line />
            </div>
        )
    }
}

export class Statement extends React.Component {
    render() {
        return (
            <div style={{
                backgroundColor: "#f1f8ff",
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 20,
                paddingRight: 20,
                border: "solid 1px #f1f8ff",
            }}>
                <ReactMarkdown source={this.props.children}/>
            </div>
        )
    }
}

export class Line extends React.Component {
    render() {
        var style = {
            height:     0,
            width:      "100%",
            borderTop:  (this.props.height || 1) + "px solid #ccc",
            marginLeft: 15,
        }
        return (
            <div style={style}>&nbsp;</div>
        )
    }
}