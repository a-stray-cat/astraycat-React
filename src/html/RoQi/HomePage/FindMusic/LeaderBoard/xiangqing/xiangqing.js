import React from 'react'
import { Card } from 'antd';
import { Button, Radio, Icon, notification } from 'antd';
import Xiangqingcss from './xiangqing.css';
import Featuredless from './featured.less';
import { Link } from 'react-router-dom';

const { Meta } = Card;
var Xiangqingcss = require('./xiangqing.css')
export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newsItem: [
                {
                    formName: "",
                    username: "",
                    musicName: "",
                    singer: "",
                    album: "",
                    allTime: "",
                    collection: ""

                }
            ]
        }
    }

    update(){
        
        //fetch
        fetch("/musicForm/musicInfo", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(result => {
                this.setState({ newsItem: result });
            })
    }

    render() {
        // console.log(this.props.product);
        const { newsItem } = this.state;
        return (

            <div>
                {
                    newsItem.map((Item, index) => (
                        <div>
                            <Card className={Xiangqingcss.Cd}
                                cover={<img src={"this.props.product1"} className={Xiangqingcss.Card} />}
                            ></Card>
                            <span className={Xiangqingcss.anniu}>
                                <Button type="primary" shape="round" icon="step-forward" size="large">播放</Button>
                            </span>
                            <span className={Xiangqingcss.anniu}>
                                <Button type="primary" shape="round" icon="plus-circle" size="large">收藏</Button>
                            </span>
                            <span className={Xiangqingcss.anniu}>
                                <Button type="primary" shape="round" icon="vertical-align-bottom" size="large">下载</Button>
                            </span></div>
                    ))
                }
            </div>
        )
    }
}