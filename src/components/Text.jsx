import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/Components.scss';
import '../style/App.scss';

export default class Text extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const style = {
            color: this.props.color,
            fontSize: this.props.size,
            display: this.props.display,
            padding: this.props.padding,
        }

        return (
            <p className={`text ${this.props.className} text-${this.props.weight}`} style={style} onClick={this.props.onClick}>
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
    size: PropTypes.string,
    color: PropTypes.string,
    display: PropTypes.string,
    padding: PropTypes.string,
};