import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

import '../style/Components.scss';

export default class Carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            slideTitle: undefined,
            slideDescription: undefined,
        }
    }

    componentDidMount() {
        this.setState({
            slideTitle: this.slideTitle,
            slideDescription: this.slideDescription,
        });
    }

    render() {
        const settingsTitle = {
            ref: (slider) => (this.slideTitle = slider),
            accessibility: true,
            adaptiveHeight: true,
            asNavFor: this.state.slideDescription,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        const settingsDescription = {
            ref: (slider) => (this.slideDescription = slider),
            accessibility: true,
            adaptiveHeight: true,
            arrows: false,
            asNavFor: this.state.slideTitle,
            dots: true,
            fade: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className="carousel">
                <Slider {...settingsTitle}>
                    {this.props.children.filter(x => x.props.className.includes("title"))}
                </Slider>
                <Slider {...settingsDescription}>
                    {this.props.children.filter(x => x.props.className.includes("description"))}
                </Slider>
            </div>
        );
    }
}

Carousel.propTypes = {
    children: PropTypes.node.isRequired,
}