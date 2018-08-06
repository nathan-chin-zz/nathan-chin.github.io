import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from './Text.jsx';
import universityLogo from '../assets/UT_logo.png';
import aboutLogo from '../assets/About_Logo.png';

import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

import '../style/Section.scss';

export default class Section extends Component {
    constructor(props){
        super(props);
    }

    renderIntro() {
        return(
            <div className="title-text-container">
                <Text className="title-text-1" weight="light">Hi, I'm</Text>
                <Text className="title-text-2" weight="extrabold">Nathan Chin</Text>
                <Typist className="labels-animation-container" cursor={{ blink: true, hideWhenDone: true, hideWhenDoneDelay: 1500 }}>
                    <Text>Student</Text>
                    <Typist.Delay ms={2000} />
                    <Text>, Hackathon Director</Text>
                    <Typist.Delay ms={2000} />
                    <Text>, Software Engineer</Text>
                </Typist>
            </div>
        );

    }

    renderAbout() {
        return (
            <div className="about-container">
                <Text className="about-title" weight="extrabold">About</Text>
                <div className="about-description">
                    <Text weight="regular">Hi, my name is Nathan Chin, and I'm a current third-year electrical and computer engineering student at The University of Texas at Austin</Text>
                    <div className="divider"/>
                    <Text weight="bold">Education</Text>
                    <div className="education-container">
                        <div className="school">
                            <img className="logo" src={universityLogo}/>
                            <div>
                            <Text weight="semibold">The University of Texas at Austin</Text>
                            <Text weight="regular">B.S in Electrical and Computer Engineering<br/>Minor in Business Foundations<br/>2016-2020<br/>Primary technical core: Software Engineering<br/>Secondary technical core: Computer Architecture/Embedded Systems</Text>
                            </div>
                        </div>
                        <div className="coursework">
                            <Text weight="semibold">Relevant Coursework</Text>
                            <Text weight="regular">
                            EE 460N: Computer Architecture (LC-3 Assembly, C)<br/>
                            EE 360C: Algorithms (Java)<br/>
                            EE 107S: Intro to Python (Python)<br/>
                            EE 119: Professional Development<br/>
                            EE 313: Linear Systems and Signals (MATLAB)<br/>
                            EE 312: Software Design & Implementation I (C, C++)<br/>
                            EE 107S: Intro to Linux (Bash)<br/>
                            EE 411: Circuit Theory<br/>
                            EE 319K: Intro to Embedded Systems (LC-3 Assembly, C)<br/>
                            EE 316: Digital Logic Design (VHDL)<br/>
                            EE 306: Intro to Computing (LC-3 Assembly)<br/>
                            EE 302: Intro to Electrical Engineering (LabVIEW)<br/>

                            M 427J: Differential Equations with Linear Algebra<br/>
                            M 325K: Discrete Mathematics<br/>
                            M 340L: Matrices and Matrix Calculations<br/>
                            M 408D: Sequences, Series, and Multivariable Calculus<br/>
                            M 408C: Differential and Integral Calculus<br/>

                            LIN 353C: Computational Linguistics (Python)<br/>
                            
                            ACC 310F: Foundations of Accounting<br/>
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    renderExperience() {
        return (
            <div className="experience-container">
                <Text className="experience-title" weight="extrabold">Experience</Text>
            </div>
        );
    }

    renderProjects() {
        return (
            <div className="projects-container">
                <Text className="projects-title" weight="extrabold">Projects</Text>
            </div>
        );
    }

    renderSkills() {
        return (
            <div className="skills-container">
                <Text className="skills-title" weight="extrabold">Skills</Text>
            </div>
        );
    }

    renderContact() {
        return (
            <div style={{zIndex: 1000, position: "relative"}}>
            <Text weight="bold">Want to see my website for 2017? <a href="/2017">Check it out</a> </Text>
            </div>
        );
    }

    renderSection() {
        const title = this.props.title.toLowerCase();
        if(title === 'intro'){
            return this.renderIntro();
        } else if(title === 'about') {
            return this.renderAbout();
        } else if(title === 'experience') {
            return this.renderExperience();
        } else if(title === 'projects') {
            return this.renderProjects();
        } else if(title === 'skills') {
            return this.renderSkills();
        } else if(title === 'contact') {
            return this.renderContact();
        }
    }

    render() {
        return (
            <div className={`main ${this.props.title.toLowerCase()}`}>
                <div className="angle1"></div>
                <div className="angle2"></div>
                <div className="angle3"></div>
                { this.props.children }
                { this.renderSection() }
            </div>
        )
    }
    
}

Section.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
};
