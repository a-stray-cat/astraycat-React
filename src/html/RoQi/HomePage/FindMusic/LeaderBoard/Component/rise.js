
import React from 'react'
import { Carousel, Card, Icon } from 'antd';

import { Link } from 'react-router-dom';


const { Meta } = Card;
var RiseCss = require('../leaderboard.css')

export default class Rise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [{
                musicId: "",
                musicName: "",
                singer: ""
            }]
        }
    }
    componentDidMount() {
        var that = this;
        fetch("/rankingList/rise")
            .then(function (res) {
                console.log(res);
                return res.json();
            })
            .then(function (data) {
                console.log(data);
                that.setState({ news: data })
            })
    }
    render() {
        const { news } = this.state;

        return (
            <div>
                <div>
                    {
                        news.map((Item, index) => (
                            <div style={{ width: 280 }}>
                             
                                    <ol>
                                        <li>
                                            <div className={RiseCss.td}>{Item.musicName}</div>
                                           <div className={RiseCss.td1}> {Item.singer}</div></li>
                                    </ol>
                              
                            </div>
                        ))}
                </div>

            </div>


        )
    }
}

