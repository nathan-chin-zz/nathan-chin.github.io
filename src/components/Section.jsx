import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from './Text.jsx';

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

    }

    renderExperience() {

    }

    renderProjects() {

    }

    renderSkills() {

    }

    renderContact() {

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
                { this.renderSection() }
            </div>
        )
    }
    
}

Section.propTypes = {
    title: PropTypes.string,
};
