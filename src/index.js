import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import RoqiBox from './html/RoQi/roqibox';
import DenLu from './html/RoQi/HomePage/denlu';
import ZhuCe from './html/RoQi/HomePage/zhuce';
import WangJi from './html/RoQi/HomePage/wangji';
import Admin from './html/RoQi/Admin/admin';
import User from './html/RoQi/Admin/User/user'
class IndexPage extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        {/* <Route path="/" exact component={IndexBox}></Route> */}
                        <Route path="/" exact component={RoqiBox} history={this.props.history}></Route>
                        <Route path="/denlu" exact component={DenLu} history={this.props.history}></Route>
                        <Route path="/zhuce" exact component={ZhuCe} history={this.props.history}></Route>
                        <Route path="/wangji" exact component={WangJi} history={this.props.history}></Route>
                        <Route path="/admin" exact component={Admin} history={this.props.history}></Route>
                        <Route path="/admin/user" exact component={Admin} history={this.props.history}></Route>
                        {/* <Redirect to="/html/index"></Redirect> */}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
export default withRouter(IndexPage)
ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
