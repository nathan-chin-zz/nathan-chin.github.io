import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from './Text.jsx';

import '../style/Components.scss';

export default class Event extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const theme = this.props.color;
        if (this.props.orientation.toLowerCase() === 'left') {
            return (
                <div className="event">
                    <div className="event-line" style={{ background: theme }}/>
                    <div className="event-details">
                        <div className="event-description">
                        </div>
                        <img className="event-image" style={{ border: `5px solid ${theme}` }}/>
                        <div className="event-label-container">
                            <div className="event-label" style={{ marginLeft: "2rem" }}>
                                <Text weight="semibold" size="2rem">{this.props.label}</Text>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="event">
                    <div className="event-line" style={{ background: theme }}/>
                    <div className="event-details">
                        <div className="event-label-container" style={{ justifyContent: "flex-end"}}>
                            <div className="event-label" style={{ justifyContent: "flex-end", marginRight: "2rem" }}>
                                <Text weight="semibold" size="2rem">{this.props.label}</Text>
                            </div>
                        </div>
                        <img className="event-image" style={{ border: `0.25rem solid ${theme}` }}/>
                        <div className="event-description">
                        </div>
                    </div>
                </div>
            );
        }
    }
}

Event.propTypes = {
    orientation: PropTypes.string,
    color: PropTypes.string,
    label: PropTypes.string,
    description: PropTypes.string,
}