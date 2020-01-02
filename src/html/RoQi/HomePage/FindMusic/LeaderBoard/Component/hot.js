
import React from 'react'
import { Carousel, Card, Icon } from 'antd';

import { Link } from 'react-router-dom';


const{Meta}=Card;
var HotCss = require('../leaderboard.css')

export default class Hot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [{
                musicld: "",
                musicName:"",
                singer:""
            }]
        }
    }
    componentDidMount() {
        var that = this;
        fetch("/rankingList/hot")
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
                                    <div className={HotCss.td}>{Item.musicName}</div>
                                   <div className={HotCss.td1}> {Item.singer}</div></li>
                            </ol>
                      
                    </div>
                        ))}
            </div>

        </div>

      
        )
    }
}

