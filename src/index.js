import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import Login from './test/login';
import Register from './test/register';


class IndexPage extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        {/* <Route path="/" exact component={IndexBox}></Route> */}
                        <Route path="/test/loign" exact component={Login}></Route>
                        <Route path="/test/register" exact component={Register}></Route>
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
