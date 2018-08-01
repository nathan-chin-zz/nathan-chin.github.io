import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/App.scss';

export default class Text extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <p className={`text text-${this.props.weight.toLowerCase()}`}>
                {this.props.children}
            </p>
        );
    }

}

Text.propTypes = {
    children: PropTypes.node.isRequired,
    weight: PropTypes.string,
};