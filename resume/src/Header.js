import React from 'react'
import {styles as experienceStyles} from './Experience'
export default class Header extends React.Component {
    render() {
        var header           = this.props.cv.Header
        var latestExperience = this.props.cv.experience[0]
        return (
            <div style={styles.root}>
                <div style={styles.name}>{header.Name}</div>
                <div style={styles.title}>{header.Title}</div>
                <div style={experienceStyles.positionTitle}>{latestExperience.positions[0].title}</div>
                <div style={experienceStyles.companyTitle}>{latestExperience.companyTitle}</div>
            </div>
        )
    }
}
var styles = {
    root:  {
        float: "left"
    },
    name:  {
        fontSize:   "45px",
        fontWeight: "bold"
    },
    title: {
        fontSize: "30px",
        marginBottom: 15
    }
}
