import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Dashboard extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h5 className="container">Dashboard here</h5>
            </div>
        )
    }
}