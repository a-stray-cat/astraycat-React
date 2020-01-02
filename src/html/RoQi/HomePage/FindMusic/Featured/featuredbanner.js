
import React from 'react'
import { Carousel, Card, Icon } from 'antd';
import Featuredless from './featured.less';
import { Link } from 'react-router-dom';


const { Meta } = Card;

var FeaturedCss = require('./featured.css')
export default class Featuredbanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [{
              
                videoName:"",
                uploadName:"",
                label:"",
                storagePath:""
            }]
        }
    }
   
    componentDidMount() {
        var that = this;
        fetch("/homepage/videoForm")
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
                                    cover={<img src={Item.storagePath} />}
                                    
                                >
                                    <Meta title={Item.videoName}  description="歌单" />
                                </Card>
                              
                            ))}
                </div>

            </div>

        )
    }
}

