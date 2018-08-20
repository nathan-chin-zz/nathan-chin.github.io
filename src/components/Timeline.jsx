import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from './Text.jsx';

import '../style/Components.scss';

export default class Timeline extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="timeline">
                <Text weight="regular" className="endpoint-text" color={this.props.state ? "#383838" : "#fff07c"}>Now</Text>
                <div className="endpoint" style={{ background: (this.props.state ? "#383838" : "#fff07c") }}/>
                {this.props.children}
                <div className="endpoint" style={{ background: (this.props.state ? "#383838" : "#fff07c") }}/>
                <Text weight="regular" className="endpoint-text"  color={this.props.state ? "#383838" : "#fff07c"}>Then</Text>
            </div>
        );
    }
}

Timeline.propTypes = {
    children: PropTypes.node.isRequired,
    state: PropTypes.bool,
}