import React from 'react'
import HomePage from './HomePage/homepage'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
var RoqiBoxCss = require('./roqibox.css')
export default class RoqiBox extends React.Component {

    render() {

        return (

            <div className={RoqiBoxCss.roqi}>
                 <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={HomePage}></Route>
                      
                       
                        {/* <Redirect to="/login"></Redirect> */}
                    </Switch>
                </BrowserRouter>
            </div>

        )
    }
}