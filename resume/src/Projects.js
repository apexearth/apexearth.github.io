import React from 'react'
import ReactMarkdown from 'react-markdown'
import TagList from './TagList'
import {Statement, Line} from './CvParts'

export default class Projects extends React.Component {
    render() {
        var projects = this.props.cv.projects.map(createProject)
        return (
            <div style={{marginTop: 10}}>
                {projects}
            </div>
        )
    }
}

var projectIndex = 0

function createProject(project) {
    if (project.visible === false) return null
    var style = {
        textAlign : "justify",
        display   : "flex",
        alignItems: "center",
        whiteSpace: "nowrap",
    }
    return <div key={projectIndex++}>
        <div style={style}>
            <span style={styles.projectTitle}>{project.title}</span>
            <Line height="2" width="100px"/>
            <Link url={project.url}/>
            <Line height="2" width="100px"/>
            <Link url={project.github}/>
            <Line height="2"/>
        </div>
        <div style={{pageBreakInside: "avoid"}}>
            <ReactMarkdown source={project.description}/>
        </div>
    </div>
}

function Link({url}) {
    return <a href={url} target="_BLANK" style={{paddingLeft: '10px', paddingRight: '10px'}}>{url}</a>
}

export var styles = {
    projectTitle: {
        display : "inline-block",
        fontSize: "18px", whiteSpace: "nowrap", fontWeight: "bold", marginRight: 15
    }
}
