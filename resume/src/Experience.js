import React from 'react'
import ReactMarkdown from 'react-markdown'
import TagList from './TagList'
import {Statement, Line} from './CvParts'

export default class Experience extends React.Component {
    render() {
        var experience = this.props.cv.experience.map(createCompany)
        return (
            <div style={{marginTop: 10}}>
                {experience}
            </div>
        )
    }
}

var companyIndex  = 0
var positionIndex = 0
function createCompany(company) {
    if (company.visible === false) return null
    var style = {
        textAlign: "justify",
    }
    return <div key={companyIndex++} style={style}>
        {company.positions.map(createPosition.bind(null, company))}
    </div>
}
function createPosition(company, position) {
    var positionTitle =
            <div style={styles.container}>
                <div style={styles.positionTitle}>{position.title}</div>
                <Line height="2"/>
                <div style={{whiteSpace: "nowrap", fontSize: "12px", fontWeight: "bold", marginLeft: 15}}>
                    {position.date.start} - {position.date.end}
                </div>
            </div>

    var companyTitle =
            <div style={styles.container}>
                <div style={styles.companyTitle}>{company.companyTitle}</div>
                <div style={{whiteSpace: "nowrap", fontSize: "12px", fontWeight: "bold"}}>
                    {position.location}
                </div>
            </div>

    var tagList = position.tags
        ? <div style={{pageBreakInside: "avoid", paddingTop: 5, paddingBottom: 5}}><TagList tags={position.tags}/></div>
        : null

    var statement =
            <div style={{pageBreakInside: "avoid"}}>
                <Statement>{position.statement}</Statement>
            </div>

    var description =
            <div>
                <ReactMarkdown source={position.description}/>
            </div>

    return (
        <div key={positionIndex++} style={{
            marginBottom: 15,
        }}>
            <div style={{pageBreakInside: "avoid"}}>
                {positionTitle}
                {companyTitle}
                {tagList}
            </div>
            {position.statement ? statement : null}
            {description}
        </div>
    )
}

export var styles = {
    positionTitle: {
        fontSize: "18px", whiteSpace: "nowrap", fontWeight: "bold", marginRight: 15
    },
    companyTitle : {
        fontSize: "18px", color: "#6a737c", fontWeight: "normal"
    },
    container    : {
        display       : "flex",
        alignItems    : "center",
        justifyContent: "space-between"
    }
}
