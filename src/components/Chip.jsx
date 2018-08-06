import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/App.scss';

export default class Chip extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const style = {
            background: this.props.color,
            height: this.props.size === 'small' ? "1rem" : "2rem",
        }
        
        return (
           <div style={style}>{this.props.label}</div>
        );
    }
}

Chip.propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
}