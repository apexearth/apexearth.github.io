import React from 'react'
import ReactMarkdown from 'react-markdown'
import TagList from './TagList'
import {Statement} from './CvParts'

export default class Education extends React.Component {
    render() {
        var education = this.props.cv.education.map(createEducation)
        return (
            <div style={{}}>
                {education}
            </div>
        )
    }
}

var educationIndex = 0
function createEducation(school) {
    return <div key={educationIndex++}
                style={{display: "flex", justifyContent: "space-between"}}>
        <div style={{
            fontSize: "18px", color: "#6a737c"
        }}>
            {school.name}
        </div>
        <div style={{
            fontSize: "14px"
        }}>
            {school.studies}
        </div>
        <div style={{
            fontSize: "14px"
        }}>
            {school.date.start} - {school.date.end}
        </div>
    </div>
}