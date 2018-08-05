import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Section from './Section.jsx';

import styles from '../style/App.scss';

class App extends Component {
    render() {
        return (
            <div className="main">
                <div className="nav-header">
                    <div className="nav-angle-1" />
                    <div className="nav-angle-2" />
                    <div className="nav-angle-3" />
                </div>
                <Section className="main-intro" title="Intro" />
                <Section className="about" title="About" />
                <Section className="experience" title="Experience" />
                <Section className="projects" title="Projects" />
                <Section className="skills" title="Skills" />
                <Section className="contact" title="Contact" />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));