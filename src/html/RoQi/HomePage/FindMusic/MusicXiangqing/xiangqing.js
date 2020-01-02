// import React from 'react'
// import { Card } from 'antd';
// import { Button, Radio, Icon,notification } from 'antd';
// import Xiangqingcss from './xiangqing.css';
// import Featuredless from './featured.less';
// import { Link } from 'react-router-dom';

// const { Meta } = Card;
// export default class Xiangqing extends React.Component {

//     handleSizeChange = e => {
//         this.setState({ size: e.target.value });
//     };
//     constructor(props) {
//         super(props);
//         this.state = {

//             newsItem: [{
//                 poster: "",
//                 cover: "",
//                 formName: "",
//                 chartId: "",
//                 musicName: ""
//             }]
//         }
//     }
//     componentDidMount() {
//         var that = this;
//         fetch("/homepage/musicForm")
//             .then(function (res) {
//                 console.log(res);
//                 return res.json();
//             })
//             .then(function (data) {
//                 that.setState({ newsItem: data });
//                 // document.musicName=this.state.newsItem.musicName
//             })
//     }
//     createMarkup() {
//         return { _html: this.state.newsItem.chartId };

//     }
//     addUserCollection(){
//         var myFetchOptions={
//             method:"GET"
//         }
//         fetch("/homepage/musicForm?userId="+localStorage.userId+"&fromId="+this.props.fromId,myFetchOptions)
//             .then(res=> {
//                 console.log(res);
//                 return res.json();
//             })
//             .then(data=> {
//                 notification['success']({message:'ReactNews提醒',description:'收藏成功'})
//                 // document.musicName=this.state.newsItem.musicName
//             })
//     };
//     render() {
//         const { newsItem } = this.state;
//         return (
//             <div>
//                 <Card className={Xiangqingcss.Cd}
//                     cover={<img src="http://p1.music.126.net/VTW4vsN08vwL3uSQqPyHqg==/2002210674180199.jpg" className={Xiangqingcss.Card} />}
//                 ></Card>
//                 <p>磨人歌单</p>
//                 <span className={Xiangqingcss.anniu}>
//                     <Button type="primary" shape="round" icon="step-forward" size="large" >播放</Button>
//                 </span>
//                 <span className={Xiangqingcss.anniu}>
//                     <Button type="primary" shape="round" icon="plus-circle" size="large" onChange={this.addUserCollection.bind(this)}>收藏</Button>
//                 </span>
//                 <span className={Xiangqingcss.anniu}>
//                     <Button type="primary" shape="round" icon="vertical-align-bottom" size="large">下载</Button>
//                 </span>
//             </div>
//         )
//     }
// }

import React from 'react'
import { Card } from 'antd';
import { Button, Radio, Icon, notification } from 'antd';
import Xiangqingcss from './xiangqing.css';
import Featuredless from './featured.less';
import { Link } from 'react-router-dom';

const { Meta } = Card;
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
        var data = {
            "fromId": 1,
            "userId": 1,
        }
        //fetch
        fetch("/musicForm/musicInfo", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(result => {
                console.log("0");
                console.log("0");
                console.log(result);
                console.log(result);
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
                            <p>
                                {/* {this.props.product} */}
                                歌单
                        </p>
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