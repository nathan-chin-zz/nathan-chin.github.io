import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from './Text.jsx';

import '../style/Components.scss';

export default class Timeline extends Component {
    constructor(props) {
        super(props);
    }

    printEvent(event) {

    }

    render() {
        return (
            <div className="timeline">
                <Text weight="regular" className="endpoint-now">Now</Text>
                <div className="timeline-now"/>
                {this.props.children}
            </div>
        );
    }
}

Timeline.propTypes = {
    children: PropTypes.node.isRequired,
}