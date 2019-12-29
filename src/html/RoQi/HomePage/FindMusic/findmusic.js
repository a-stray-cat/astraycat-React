import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Featured from './Featured/featured'
import FontList from './FontList/fontlist'

var FindMusicCss = require('./findmusic.css')
export default class FindMusic extends React.Component {
                render(){       
                    return( <BrowserRouter>
                        <div className={FindMusicCss.people}>
                        <div className={FindMusicCss.head}>
                            <li ><Link to="/findmusic/featured">精选</Link></li>
                            <li><Link to="/findmusic/fontlist">歌单</Link> </li>
                            <li> <Link>排行榜</Link></li>
                            <li ><Link to="">电台</Link></li>
                            <li><Link>定制</Link> </li>
                        </div>
                        <div className={FindMusicCss.body}>
                        <Route path="/findmusic/featured" exact component={Featured}></Route>
                        <Route path="/findmusic/fontlist" exact component={FontList}></Route>
                        </div>
                        </div>
                        </BrowserRouter>
                    )
                }
            }