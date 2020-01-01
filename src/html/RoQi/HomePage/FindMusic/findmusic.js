import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Featured from './Featured/featured'
import FontList from './FontList/fontlist'
import { Tabs } from 'antd';
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}
var FindMusicCss = require('./findmusic.css')
export default class FindMusic extends React.Component {
    render() {
        return (
            <div className={FindMusicCss.people}>

                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="精选" key="1">
                        <Featured/>
                </TabPane>
                    <TabPane tab="歌单" key="2">
                        <FontList/>
                 </TabPane>
                    <TabPane tab="排行榜" key="3">
                    <Featured/>
                </TabPane>
                </Tabs>

            </div>
        )
    }
}