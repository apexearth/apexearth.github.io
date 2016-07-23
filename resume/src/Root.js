import React from 'react'
import cv from './cv.js'
import Header from './Header'
import Info from './Info'
import TagList from './TagList'
import Experience from './Experience'
import Education from './Education'
import {
    Statement,
    Section,
    SectionHeader,
} from './CvParts'

export default class Root extends React.Component {
    render() {
        var short = this.props.location.query.short !== undefined
        var content = cv(!short)
        return (
            <div style={rootStyle}>
                <Section>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        whiteSpace: "nowrap",
                    }}>
                        <Header cv={content}/>
                        <Info cv={content}/>
                    </div>
                </Section>
                <Section>
                    <SectionHeader>SUMMARY</SectionHeader>
                    <Statement>{content.statement}</Statement>
                </Section>
                <Section>
                    <SectionHeader>SKILLS</SectionHeader>
                    <TagList tags={content.skills}/>
                </Section>
                <Section>
                    <SectionHeader>TECHNOLOGY</SectionHeader>
                    <TagList tags={content.technologies}/>
                </Section>
                <Section>
                    <SectionHeader>EXPERIENCE</SectionHeader>
                    <Experience cv={content}/>
                </Section>
                <Section>
                    <SectionHeader>EDUCATION</SectionHeader>
                    <Education cv={content}/>
                </Section>
            </div>
        )
    }
}

var rootStyle = {
    margin:          "0 auto",
    boxSizing:       "border-box",
    backgroundColor: "#fff",
    color:           "#3b4045",
    width:           960 + 'px',
    paddingTop:      20,
    paddingBottom:   0,
    paddingLeft:     40,
    paddingRight:    40,
    fontSize:        "14px",
    fontFamily:      ["Arial", "HelveticaNeue-Regular", "Helvetica Neue Regular", "Helvetica Neue", "Helvetica", "Lucida Grande", "sans-serif"]
}
