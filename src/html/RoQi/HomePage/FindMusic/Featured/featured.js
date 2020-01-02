
import React from 'react'
import { Carousel, Card, Icon } from 'antd';
import Featuredless from './featured.less';
import { Link } from 'react-router-dom';
import Featuredbanner from "./featuredbanner"

const { Meta } = Card;

var FeaturedCss = require('./featured.css')
export default class Featured extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [{
                poster: "",
                chartId:"",
                userId:""
            }]
        }
    }
    componentDidMount() {
        var that = this;
        fetch("/homepage/rotation")
            .then(function (res) {
                console.log(res);
                return res.json();
            })
            .then(function (data) {
                console.log(data);
                that.setState({ news: data })
            })
    }
    upload = () => {
        var data = {
          "charId": this.state.charId,
          "userId": this.state.userId,
        }
        //fetch
        fetch("/musicForm/musicInfo",{
          method:"post",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(data)
        }).then(response=>response.json())
        .then(result=>{
            this.setState({ newsItem: result });
        })}
    render() {
        const { news } = this.state;
        return (
            <div>
                <div className={FeaturedCss.lunbot} >
                    <Carousel autoplay >

                        {
                            news.map((Item, index) => (
                                <div className={FeaturedCss.lunbot1}    >
                                    <li key={index} className={FeaturedCss.lunbot1}>
                                        <Link to={'/xiangqing?formId='+Item.chartId} onClick={this.upload}>
                                        {/* <Link to={'findmusic/musicxiangqing/${Item.chartId}'} target="_blank"> */}
                                            <Carousel autoplay>
                                                <img src={Item.poster} />                                             
                                            </Carousel>
                                        </Link>         
                                    </li></div>
                            ))}
                    </Carousel>
                </div>
                <div>
                    <Featuredbanner />
                    <Featuredbanner />
                    <Featuredbanner />
                    <Featuredbanner />
                </div>

            </div>

        )
    }
}

