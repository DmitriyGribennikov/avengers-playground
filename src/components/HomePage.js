import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Panel, Row, Col, Button } from 'react-bootstrap'
import Slider from "react-slick"
import MovieCard from './MovieCard'
import DatePicker from 'react-datepicker';
import { toUtcStartOfDay } from '../utils/dateUtils'


import 'react-datepicker/dist/react-datepicker.css';




const Arrow = (props) =>  {
    const { className, style, onClick, direction } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <div className={`arrow arrow-${direction}`} />
        </div>
    );
}

const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    nextArrow: <Arrow />,
    prevArrow: <Arrow direction='left'/>,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }
    ]
};

export default class HomePage extends Component {

    static propTypes = {
        movies: PropTypes.array.isRequired,
        setDates: PropTypes.func.isRequired
    }

    state = {
        startDate: toUtcStartOfDay(this.props.startDate),
        endDate: toUtcStartOfDay(this.props.endDate)
    }

    startDateChangeHandler = (date) => this.setState({startDate: toUtcStartOfDay(date)})

    endDateChangeHandler = (date) => this.setState({endDate: toUtcStartOfDay(date)})

    searchButtonClickHandler = () => this.props.setDates({
        startDate: this.state.startDate.valueOf(),
        endDate: this.state.endDate.valueOf()
    });

    renderHeading = () => {
        const { startDate, endDate } = this.state
        return(
            <Panel.Heading className='search-form'>
                <Row>
                    <Col className='form-title margin-bottom-sm' sm={12} md={6}> What's On </Col>
                    <Col className='sm-align-left margin-bottom-sm' sm={12}  md={2}>
                        <label className='form-label'>From</label>
                        <div className="date-field-wrapper" >
                            <DatePicker className="date-field" selected={ startDate } onChange={this.startDateChangeHandler} />
                        </div>
                    </Col>
                    <Col className='sm-align-left margin-bottom-sm' sm={12}  md={2}>
                        <label className='form-label'>To</label>
                        <div className="date-field-wrapper">
                            <DatePicker className="date-field" selected={ endDate } onChange={this.endDateChangeHandler} />
                        </div>
                    </Col>
                    <Col  sm={12} md={2} className='sm-align-left margin-bottom-sm'>
                        <Button bsStyle="primary" onClick={this.searchButtonClickHandler} >Search</Button>
                    </Col>


                </Row>
            </Panel.Heading>
        )
    }

    render() {
        return (<div className='home-page'>
                <Panel>
                    { this.renderHeading() }
                    <Panel.Body>
                        <Slider {...sliderSettings}>
                            { this.props.movies.map(movie => <MovieCard  movie={movie} key={movie.id}/>) }
                        </Slider>
                    </Panel.Body>
                </Panel>
            </div>)
    }
}


