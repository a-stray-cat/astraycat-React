import React from 'react'
import { Link } from 'react-router-dom'

export default class HomeBox extends React.Component {

    render() {

        return (
            <Link to="/user/music_form/getAll">获取表单</Link>
            // <button href="/user/music_form/getAll"></button>
        )
    }
}