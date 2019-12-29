import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import {  Button } from 'antd';
import FindMusic from './FindMusic/findmusic';
var HomePageCss = require('./homepage.css')
export default class HomePage extends React.Component {

    render() {

        return (
            <BrowserRouter >
            <div className={HomePageCss.all}>
                <div className={HomePageCss.header} >

                    <img className={HomePageCss.logo} src={require('../../../image/favicon.ico')} alt="标签" />


                    <div className={HomePageCss.Name}> A-Stray-Cat</div>

                    <button className={HomePageCss.button1}></button>
                    <button className={HomePageCss.button1}></button>


                    <input type="text" placeholder="请输入..." className={HomePageCss.sinput} />
                    <button className={HomePageCss.sbutton}></button>

                    <img className={HomePageCss.headpt} src={require('../../../image/cat.jpg')} alt="标签"/> 
                    <Button className={HomePageCss.sbutton} href="./denlu" ></Button>
                </div>
              
                    <div className={HomePageCss.daohang} >
                        <ul >
                            <ul>推荐</ul>
                            <li ><Link to="/findmusic">发现音乐</Link>   </li>
                            <li><Link>视频</Link> </li>
                            <li> <Link>朋友</Link></li>

                            <ul>我的音乐</ul>
                            <li> <Link>下载与本地管理</Link></li>
                            <li> <Link>我的收藏</Link></li>
                            <li><Link>我的电台</Link> </li>

                            <ul>我创建的歌单</ul>
                            <li> <Link>我喜欢</Link></li>
                            <li> <Link>歌单一</Link></li>
                            <li> <Link>歌单二</Link></li>

                            <ul>特色</ul>
                            <li> <Link>小黑屋</Link></li>
                            <li> <Link>分享</Link></li>
                            
                        </ul>

                    </div>
                    
                    <div className={HomePageCss.leiro}>
                      
                    <Route path="/findmusic" exact component={FindMusic}></Route>
              
                        {/* <Route path="/image" exact component={Image}></Route> */}
                    </div>
                  
            </div>
            </BrowserRouter>
        )
    }
}