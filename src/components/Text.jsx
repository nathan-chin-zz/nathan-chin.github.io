import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/App.scss';

export default class Text extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <p className={`text ${this.props.className} text-${this.props.weight}`} onClick={this.props.onClick}>
                {this.props.children}
            </p>
        );
    }

}

Text.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    weight: PropTypes.string,
};