import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as Scroll from 'react-scroll';
import { Element } from 'react-scroll';
import Section from './Section.jsx';
import Text from './Text.jsx';
import introLogo from '../assets/Intro_Logo.png';
import aboutLogo from '../assets/About_Logo.png';

import styles from '../style/App.scss';

class App extends Component {

    render() {

        this.scrollTo = (element) => {
            Scroll.scroller.scrollTo(element, { duration: 1000, smooth: true });
        }

        return (
            <div className="main">
                <div className="nav-sidebar">
                    <div className="nav-container">
                       <Text weight="light" onClick={() => this.scrollTo('intro')}>HOME</Text>
                       <Text weight="light" onClick={() => this.scrollTo('about')}>ABOUT</Text>
                       <Text weight="light" onClick={() => this.scrollTo('experience')}>EXPERIENCE</Text>
                       <Text weight="light" onClick={() => this.scrollTo('projects')}>PROJECTS</Text>
                       <Text weight="light" onClick={() => this.scrollTo('skills')}>SKILLS</Text>
                       <Text weight="light" onClick={() => this.scrollTo('contact')}>CONTACT</Text>
                    </div>
                </div>              
                <div className="corner-angle-1" />
                <div className="corner-angle-2" />
                <div className="corner-angle-3" />
                <Element name="intro">
                <Section className="main-intro" title="Intro" />
                </Element>
                <Element name="about">
                   <Section className="about" name="about" title="About" />
                </Element>
                <Element name="experience">
                   <Section className="experience" title="Experience" />
                </Element>
                <Element name="projects">
                   <Section className="projects" title="Projects" />
                </Element>
                <Element name="skills">
                   <Section className="skills" title="Skills" />
                </Element>
                <Element name="contact">
                   <Section className="contact" title="Contact" />
                </Element>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));