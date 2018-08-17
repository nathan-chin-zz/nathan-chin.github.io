import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from './Text.jsx';

import '../style/Components.scss';

export default class Chip extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const style = {
            background: this.props.color,
        }

        return (
           <div className="chip" style={style}><Text weight="medium" display="inline" color="white">{this.props.label}</Text></div>
        );
    }
}

Chip.propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
}