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
                        <div className="event-description-container">
                            <div className="event-description" style={{ background: theme }}>
                                <Text weight="regular" color="#ffffff">{!!this.props.date ? this.props.date : "CURRENT"}</Text>
                            </div>
                        </div>
                        <img className="event-image" src={this.props.image} style={{ border: `0.25rem solid ${theme}` }}/>
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
                        <img className="event-image" src={this.props.image} style={{ border: `0.25rem solid ${theme}` }}/>
                        <div className="event-description-container">
                            <div className="event-description" style={{ background: theme }}>
                            
                            </div>
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
    image: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
}