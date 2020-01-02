
import React from 'react'
import { Carousel, Card, Icon } from 'antd';
import Featuredless from './featured.less';
import { Link } from 'react-router-dom';


const { Meta } = Card;

var FeaturedCss = require('./featured.css')
export default class Banner1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [{
              
                poster: "",
                cover:"",
                formName:""
            }]
        }
    }
    componentDidMount() {
        var that = this;
        fetch("/homepage/musicForm")
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
                                <Card  className={FeaturedCss.card}
                                    hoverable
                                    style={{ width: 120 }}
                                    cover={<img src={Item.cover} />}
                                >
                                    <Meta title={Item.formName} description="歌单" />
                                </Card>
                            ))}
                </div>

            </div>

        )
    }
}

