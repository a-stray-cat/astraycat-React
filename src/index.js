import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RoqiBox from './html/RoQi/roqibox';
import DenLu from './html/RoQi/HomePage/denlu';
import ZhuCe from './html/RoQi/HomePage/zhuce';
import WangJi from './html/RoQi/HomePage/wangji';
class IndexPage extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        {/* <Route path="/" exact component={IndexBox}></Route> */}
                        <Route path="/" exact component={RoqiBox}></Route>
                        <Route path="/denlu" exact component={DenLu}></Route>
                        <Route path="/zhuce" exact component={ZhuCe}></Route>
                        <Route path="/wangji" exact component={WangJi}></Route>
                        {/* <Redirect to="/html/index"></Redirect> */}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
