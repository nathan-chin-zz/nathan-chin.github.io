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
                                { !!this.props.title ? (<Text weight="bold" color="#ffffff">{this.props.title.toUpperCase()}</Text>) : "" }
                                <Text weight="regular" color="#ffffff">{this.props.description}</Text>
                            </div>
                        </div>
                        <img className="event-image" src={this.props.image} style={{ border: `0.25rem solid ${theme}` }}/>
                        <div className="event-label-container" style={{ justifyContent: "flex-end"}}>
                            <div className="event-label" style={{ marginLeft: "2rem", alignItems: "flex-start" }}>
                                <Text weight="semibold" size="2rem" color={!!this.props.labelColor ? this.props.labelColor : "#383838"}>{this.props.label}</Text>
                                <Text weight="regular" size="1rem" color={!!this.props.labelColor ? this.props.labelColor : "#383838"}>{this.props.date}</Text>
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
                            <div className="event-label" style={{ marginRight: "2rem", alignItems: "flex-end" }}>
                                <Text weight="semibold" size="2rem" color={!!this.props.labelColor ? this.props.labelColor : "#383838"}>{this.props.label}</Text>
                                <Text weight="regular" size="1rem" color={!!this.props.labelColor ? this.props.labelColor : "#383838"}>{this.props.date}</Text>
                            </div>
                        </div>
                        <img className="event-image" src={this.props.image} style={{ border: `0.25rem solid ${theme}` }}/>
                        <div className="event-description-container">
                            <div className="event-description" style={{ background: theme }}>
                                { !!this.props.title ? (<Text weight="bold" color="#ffffff">{this.props.title.toUpperCase()}</Text>) : "" }
                                <Text weight="regular" color="#ffffff">{this.props.description}</Text>
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
    labelColor: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}