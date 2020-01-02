
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
                    <Card title="Card title" bordered={false} style={{ width: 300 }}>

                        <Rise></Rise>
                    </Card>
                </div>
                <div style={{ background: '#ECECEC', padding: '30px' }}  className={ LeadereCss.card1}>
                    <Card title="Card title" bordered={false} style={{ width: 300 }}>

                        <New></New>
                    </Card>
                </div>
                {/* <div style={{ background: '#ECECEC', padding: '30px' }}  className={ LeadereCss.card2}>
                    <Card title="Card title" bordered={false} style={{ width: 300 }}>


                        <Hot></Hot>
                    </Card>
                </div> */}




            </div>




        )
    }
}

