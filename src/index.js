import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IndexBox from './html/test';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RoqiPage from './html/RoQi/roqipage';


class IndexPage extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        {/* <Route path="/" exact component={IndexBox}></Route> */}
                        <Route path="/" exact component={RoqiPage}></Route>
                        <Route path="/html/test" exact component={IndexBox}></Route>
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
