import React from 'react'
import HomePage from './HomePage/homepage'

var RoqiBoxCss = require('./roqibox.css')

export default class RoqiBox extends React.Component {

    render() {

        return (

            <div className={RoqiBoxCss.roqi}>
                <HomePage></HomePage>
            </div>

        )
    }
}