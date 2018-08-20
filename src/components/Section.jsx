import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from './Text.jsx';
import Chip from './Chip.jsx';
import Timeline from './Timeline.jsx';
import Event from './Event.jsx';
import Carousel from './Carousel.jsx';
import universityLogo from '../assets/UT_logo.png';
import aboutLogo from '../assets/About_Logo.png';
import hudlLogo from '../assets/Hudl_Logo.png';
import krewLogo from '../assets/Krew_Logo.png';
import targetLogo from '../assets/Target_Logo.png';
import pinstackLogo from '../assets/Pinstack_Logo.png';
import freetailLogo from '../assets/Freetail_Logo.png';
import ieeeLogo from '../assets/IEEE_Logo.png';
import hackLogo from '../assets/Indigitous_HACK_Logo.png';
import aacmLogo from '../assets/AACM_Logo.png';

import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

import '../style/Section.scss';

export default class Section extends Component {
    constructor(props){
        super(props);

        this.state = {
            workExperience: true,
        }
    }

    toggleExperience() {
        let curr = this.state.workExperience;
        this.setState({ workExperience: !curr });
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
                    <Text weight="bold" size="1.5rem">Education</Text>
                    <div className="education-container">
                        <img className="logo" src={universityLogo}/>
                        <div className="school" style={{ marginRight: "4rem" }}>
                            <Text weight="semibold" size="1.25rem">THE UNIVERSITY OF TEXAS AT AUSTIN</Text>
                            <Text weight="regular" size="1.25rem">Bachelor of Science: Electrical and Computer Engineering</Text>
                            <Text weight="regular">Primary technical core: Software Engineering<br/>Secondary technical core: Computer Architecture/Embedded Systems<br/>Minor: Business Foundations</Text>
                            <div className="coursework">
                                <Text weight="semibold" size="1.25rem">Relevant Coursework</Text>
                                <div><Text weight="regular" className="class-name">EE 460N: Computer Architecture</Text> <Chip label="C" color="#5a75ba"/> <Chip label="LC-3 ASSEMBLY" color="#25344c"/></div>
                                <div><Text weight="regular" className="class-name">EE 360C: Algorithms</Text> <Chip label="JAVA" color="#ec2025"/> </div>
                                <div><Text weight="regular" className="class-name">EE 107S: Intro to Python</Text> <Chip label="PYTHON" color="#ffd647"/> </div>
                                <div><Text weight="regular" className="class-name">EE 119: Professional Development</Text></div>
                                <div><Text weight="regular" className="class-name">EE 313: Linear Systems and Signals</Text> <Chip label="MATLAB" color="#f97e0f"/></div>
                                <div><Text weight="regular" className="class-name">EE 312: Software Design & Implementation I</Text> <Chip label="C" color="#5a75ba"/> <Chip label="C++" color="#009688"/></div>
                                <div><Text weight="regular" className="class-name">EE 107S: Intro to Linux</Text> <Chip label="BASH" color="#80b3ff"/> </div>
                                <div><Text weight="regular" className="class-name">EE 411: Circuit Theory</Text></div>
                                <div><Text weight="regular" className="class-name">EE 319K: Intro to Embedded Systems</Text> <Chip label="C" color="#5a75ba"/> <Chip label="LC-3 ASSEMBLY" color="#25344c"/> </div>
                                <div><Text weight="regular" className="class-name">EE 316: Digital Logic Design</Text> <Chip label="VHDL" color="#000000"/></div>
                                <div><Text weight="regular" className="class-name">EE 306: Intro to Computing</Text> <Chip label="LC-3 ASSEMBLY" color="#25344c"/> </div>
                                <div><Text weight="regular" className="class-name">EE 302: Intro to Electrical Engineering</Text> <Chip label="LABVIEW" color="#90c584"/></div>
                                <div><Text weight="regular" className="class-name">M 427J: Differential Equations with Linear Algebra</Text></div>
                                <div><Text weight="regular" className="class-name">M 325K: Discrete Mathematics</Text></div>
                                <div><Text weight="regular" className="class-name">M 340L: Matrices and Matrix Calculations</Text></div>
                                <div><Text weight="regular" className="class-name">M 408D: Sequences, Series, and Multivariable Calculus</Text></div>
                                <div><Text weight="regular" className="class-name">M 408C: Differential and Integral Calculus</Text></div>
                                <div><Text weight="regular" className="class-name">LIN 353C: Computational Linguistics</Text> <Chip label="PYTHON" color="#ffd647"/> </div>
                                <div><Text weight="regular" className="class-name">ACC 310F: Foundations of Accounting</Text></div>
                                <div className="divider"/>
                                <Text weight="semibold">Fall 2018</Text>
                                <div><Text weight="regular" className="class-name">EE 422C: Software Design & Implementation II</Text> <Chip label="JAVA" color="#ec2025"/> </div>
                                <div><Text weight="regular" className="class-name">EE 461S: Operating Systems</Text> <Chip label="C" color="#5a75ba"/> </div>
                                <div><Text weight="regular" className="class-name">EE 333T: Engineering Communication</Text></div>
                                <div><Text weight="regular" className="class-name">CMS 315M: Interpersonal Communication Theory</Text></div>
                                <div><Text weight="regular" className="class-name">PED 104P: Tennis</Text></div>
                            </div>
                        </div>
                        <Text weight="regular">May 2020</Text>
                    </div>
                </div>
            </div>
        );
    }


    renderExperience() {
        if (this.state.workExperience) {
            return (
                <div className="experience-container">
                    <Text className="experience-title" weight="extrabold">Experience</Text>
                    <div className="experience-switch" onClick={this.toggleExperience.bind(this)}>
                        <div className="switch"/>
                    </div>
                    <Text weight="regular" className="timeline-title">Work Experience</Text>
                    <Timeline state={this.state.workExperience}>
                        <Event 
                            orientation="left" 
                            color="#f26722" 
                            image={hudlLogo} 
                            label="Hudl" 
                            date="MAY 2018 - AUGUST 2018"
                            title="Software Development Intern"
                            description="This is a description of the job to tell you what I did and why it was important and relevant for me to mentionThis is a description of the job to tell you what I did and why it was important and relevant for me to mentionThis is a description of the job to tell you what I did and why it was important and relevant for me to mention"/>
                        <Event 
                            orientation="right" 
                            color="#3c3f58" 
                            image={krewLogo} 
                            label="Krew"
                            date="November 2017 - January 2018"
                            title="Android Developer"/>
                        <Event 
                            orientation="left" 
                            color="#cc0000" 
                            image={targetLogo} 
                            label="Target"
                            date="May 2017 - Present"
                            title="Salesfloor Team Member"/>
                        <Event 
                            orientation="right" 
                            color="#e92229" 
                            image={pinstackLogo} 
                            label="Pinstack"
                            date="May 2016 - August 2016"
                            title="Gameroom Attendant"/>
                    </Timeline>
                </div>
            );
        }
        else {
            return (
                <div className="experience-container">
                    <Text className="experience-title" weight="extrabold" color="white">Experience</Text>
                    <div className="experience-switch" onClick={this.toggleExperience.bind(this)} style={{ justifyContent: "flex-end", background: "#FFD98C" }}>
                        <div className="switch"/>
                    </div>
                    <Text weight="regular" className="timeline-title" color="white">Leadership Experience</Text>
                    <Timeline>
                        <Event 
                            orientation="right" 
                            color="#ffffff" 
                            image={freetailLogo} 
                            label="Freetail Hackers" 
                            labelColor="white"
                            date="March 2017 - Present"
                            title="Co-Lead Director, Outreach Organizer"/>
                        <Event 
                            orientation="left" 
                            color="#fdbb40" 
                            image={ieeeLogo} 
                            label="IEEE" 
                            labelColor="white"
                            date="Fall 2016 - Present"
                            title="Assistant Officer - Events, Communications"/>
                        <Event 
                            orientation="right" 
                            color="#fc4513" 
                            image={hackLogo} 
                            label="#HACK" 
                            labelColor="white"
                            date="July 2017 - Present"
                            title="Officer"/>
                        <Event 
                            orientation="left" 
                            color="#1c75ba" 
                            image={aacmLogo} 
                            label="AACM" 
                            labelColor="white"
                            date="Fall 2016 - Present"
                            title="Active Member"/>
                    </Timeline>
                </div>
            );
        }
    }

    renderProjects() {
        return (
            <div className="projects-container">
                <Text className="projects-title" weight="extrabold">Projects</Text>
                <Carousel>
                    <div className="carousel-page">
                        <h3>1</h3>
                    </div>
                    <div className="carousel-page">
                        <h3>2</h3>
                    </div>
                    <div className="carousel-page">
                        <h3>3</h3>
                    </div>
                    <div className="carousel-page">
                        <h3>4</h3>
                    </div>
                    <div className="carousel-page">
                        <h3>5</h3>
                    </div>
                    <div className="carousel-page">
                        <h3>6</h3>
                    </div>
                </Carousel>
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
        const name = this.props.title.toLowerCase();
        return (
            <div className={`main ${name} ${name === "experience" && !this.state.workExperience ? "dark" : ""}`}>
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
