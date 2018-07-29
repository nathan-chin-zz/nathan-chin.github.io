import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/Section.scss';

export default class Section extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={`main ${this.props.title.toLowerCase()}`}>
                <h1>{this.props.title}</h1>
                <div className="angle1"></div>
                <div className="angle2"></div>
                <div className="angle3"></div>
            </div>
        )
    }
    
}

Section.propTypes = {
    title: PropTypes.string,
};
