import React from 'react'
import ReactMarkdown from 'react-markdown'
import TagList from './TagList'
import {Line, Statement} from './CvParts'

export default class Experience extends React.Component {
    render() {
        var experience = this.props.cv.experience.map(createCompany)
        return (
            <div style={{}}>
                {experience}
            </div>
        )
    }
}

var companyIndex  = 0
var positionIndex = 0
function createCompany(company) {
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
                <div style={{whiteSpace: "nowrap", fontSize: "12px", fontWeight: "bold"}}>
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
        ? <div style={{marginTop: -10}}><TagList tags={position.tags}/></div>
        : null

    var statement =
            <div>
                <Statement>{position.statement}</Statement>
            </div>

    var description =
            <div>
                <ReactMarkdown source={position.description}/>
            </div>

    return (
        <div key={positionIndex++} style={{marginBottom: 15}}>
            {positionTitle}
            {companyTitle}
            <p>{tagList}</p>
            {position.statement ? statement : null}
            {description}
        </div>
    )
}

export var styles = {
    positionTitle: {
        fontSize: "18px", whiteSpace: "nowrap", fontWeight: "bold", marginTop: 10
    },
    companyTitle:  {
        fontSize: "18px", color: "#6a737c", fontWeight: "normal"
    },
    container:     {
        display:        "flex",
        alignItems:     "center",
        justifyContent: "space-between"
    }
}
