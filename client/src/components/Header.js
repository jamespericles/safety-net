import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h5 className="container">Header here</h5>
            </div>
        )
    }
}