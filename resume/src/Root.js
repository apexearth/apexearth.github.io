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
        return (
            <div style={rootStyle}>
                <Section>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        whiteSpace: "nowrap"
                    }}>
                        <Header cv={cv}/>
                        <Info cv={cv}/>
                    </div>
                </Section>
                <Section>
                    <Statement>{cv.statement}</Statement>
                </Section>
                <Section>
                    <SectionHeader>SKILLS</SectionHeader>
                    <TagList tags={cv.skills}/>
                </Section>
                <Section>
                    <SectionHeader>TECHNOLOGY</SectionHeader>
                    <TagList tags={cv.technologies}/>
                </Section>
                <Section>
                    <SectionHeader>EXPERIENCE</SectionHeader>
                    <Experience cv={cv}/>
                </Section>
                <Section>
                    <SectionHeader>EDUCATION</SectionHeader>
                    <Education cv={cv}/>
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
