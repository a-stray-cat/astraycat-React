import React from 'react'
import { Input, Icon, Button} from 'antd';
var DenLuCss = require('./denlu.css')
export default class DenLu extends React.Component {



    render() {

        return (
            <div className={DenLuCss.right}>
              <div className={DenLuCss.border}>
                <div  className={DenLuCss.center}>
            <Input className={DenLuCss.Input1}  prefix={<Icon type="user"style={{ color: 'rgba(0,0,0,.25)' }}/>} style={{width:300}} placeholder="Username"/>
            <Input  prefix={<Icon type="lock"style={{ color: 'rgba(0,0,0,.25)' }}/>} style={{width:300}}   type="password"
              placeholder="Password"    />
              <div className={DenLuCss.zhuce}>注册</div> <div className={DenLuCss.wangji}>忘记密码</div>
              <button style={{width:100}}>登录</button>
              </div>
              </div>
            </div>
        )
    }
}
