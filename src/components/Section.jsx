import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from './Text.jsx';

import '../style/Section.scss';

export default class Section extends Component {
    constructor(props){
        super(props);
    }

    renderIntro() {
        return(
            <div>
                <Text weight="light">Hi, I'm</Text>
                <Text weight="extrabold">Nathan Chin</Text>
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
                <h1>{this.props.title}</h1>
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
