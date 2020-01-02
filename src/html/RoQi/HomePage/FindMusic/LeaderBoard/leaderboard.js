
import React from 'react'
import { Carousel, Card, Icon } from 'antd';

import { Link } from 'react-router-dom';
import Rise from './Component/rise';
import New from './Component/new';
import Hot from './Component/hot';


const { Meta } = Card;
var LeadereCss = require('./leaderboard.css')

export default class LeaderBoard extends React.Component {

    render() {


        return (
            <div>
                <div style={{ background: '#ECECEC', padding: '30px' }}   className={ LeadereCss.card}>
                    <Card title="飙升榜" bordered={false} style={{ width: 320 }}>

                        <Rise></Rise>
                    </Card>
                </div>
                <div style={{ background: '#ECECEC', padding: '30px' }}  className={ LeadereCss.card1}>
                    <Card title="新歌榜" bordered={false} style={{ width: 330 }}>

                        <New></New>
                    </Card>
                </div>
                <div style={{ background: '#ECECEC', padding: '30px' }}  className={ LeadereCss.card2}>
                    <Card title="热门榜" bordered={false} style={{ width: 330 }}>


                        <Hot></Hot>
                    </Card>
                </div>




            </div>




        )
    }
}

