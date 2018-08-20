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
        const state = this.props.workState;
        if (this.props.orientation.toLowerCase() === 'left') {
            return (
                <div className="event">
                    <div className="event-line" style={{ background: theme }}/>
                    <div className="event-details">
                        <div className="event-description-container">
                            <div className="event-description" style={{ background: theme }}>
                                { !!this.props.title ? (<Text weight="bold" color="#ffffff" padding="5px">{this.props.title.toUpperCase()}</Text>) : "" }
                                <Text weight="regular" color="#ffffff" padding="5px">{this.props.description}</Text>
                            </div>
                        </div>
                        <div className="event-image-container">
                            <div className="event-image-lines" style={{ background: theme }}/>
                            <img className="event-image" src={this.props.image} style={{ border: `0.25rem solid ${theme}`, background: theme }}/>
                            <div className="event-image-lines" style={{ background: theme }}/>
                        </div>
                        <div className="event-label-container" style={{ justifyContent: "flex-end"}}>
                            <div className="event-label" style={{ marginLeft: "2rem", alignItems: "flex-start" }}>
                                <Text weight="semibold" size="2rem" color={state ? "#383838" : "#ffffff"}>{this.props.label}</Text>
                                <Text weight="regular" size="1rem" color={state ? "#383838" : "#ffffff"}>{this.props.date}</Text>
                            </div>
                        </div>
                    </div>
                    <div className="event-line" style={{ background: theme }}/>
                </div>
            );
        } else {
            return (
                <div className="event">
                    <div className="event-line" style={{ background: theme }}/>
                    <div className="event-details">
                        <div className="event-label-container" style={{ justifyContent: "flex-end"}}>
                            <div className="event-label" style={{ marginRight: "2rem", alignItems: "flex-end" }}>
                                <Text weight="semibold" size="2rem" color={state ? "#383838" : "#ffffff"}>{this.props.label}</Text>
                                <Text weight="regular" size="1rem" color={state ? "#383838" : "#ffffff"}>{this.props.date}</Text>
                            </div>
                        </div>
                        <div className="event-image-container">
                            <div className="event-image-lines" style={{ background: theme }}/>
                            <img className="event-image" src={this.props.image} style={{ border: `0.25rem solid ${theme}`, background: theme }}/>
                            <div className="event-image-lines" style={{ background: theme }}/>
                        </div>
                        <div className="event-description-container">
                            <div className="event-description" style={{ background: theme }}>
                                { !!this.props.title ? (<Text weight="bold" color="#ffffff" padding="5px">{this.props.title.toUpperCase()}</Text>) : "" }
                                <Text weight="regular" color="#ffffff" padding="5px">{this.props.description}</Text>
                            </div>
                        </div>
                    </div>
                    <div className="event-line" style={{ background: theme }}/>
                </div>
            );
        }
    }
}

Event.propTypes = {
    workState: PropTypes.bool,
    orientation: PropTypes.string,
    color: PropTypes.string,
    label: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}