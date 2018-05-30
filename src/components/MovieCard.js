import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Panel } from 'react-bootstrap'
import { humanizeDate } from '../utils/dateUtils'


export default class MovieCard extends Component {

    static propTypes = {
        movie: PropTypes.object.isRequired
    };

    render() {

        const { name, startDate, endDate, img } = this.props.movie;
        return (<Panel>
            <Panel.Heading className='custom-panel-heading'> { name } </Panel.Heading>
            <Panel.Body style={{
                height: "200px",
                backgroundImage: `url("/images/${img}.jpg")`
            }} className='background-container' >
            </Panel.Body>
            <Panel.Footer>{humanizeDate(startDate)} - { humanizeDate(endDate) }</Panel.Footer>
        </Panel>)
    }
}


