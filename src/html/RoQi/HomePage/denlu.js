import React from 'react'
import { Input, Icon, Button,message} from 'antd';
import { Link } from 'react-router-dom';

var DenLuCss = require('./denlu.css')
export default class DenLu extends React.Component {
    constructor(props){
      super(props);
      this.state={}
    }
    changeValue=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }
    upload =() =>{
      var data = {
        "username": this.state.username,
        "userPassword":this.state.userPassword
      }

      fetch("/user/login",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      }).then(response=>response.json())
      .then(result=>{
        if(result.state===4){
          message.info("密码错误")
        }
        else if(result.state===3){
          message.info("用户名不存在")
        }
        else if( result.state===2){
          message.info("管理员登录成功")  
          this.props.history.push('/admin')  
          
        }
        else if( result.state===1){
          message.info("用户登录")
          this.props.history.push('/')
        } 
      }).catch(e=>{
        message.error(e);
      })
    }

    render() {

        return (
            <div className={DenLuCss.right}>
              <div className={DenLuCss.border}>
                <div  className={DenLuCss.center}>
                  <from>
           
            <Input className={DenLuCss.right1}  prefix={<Icon type="user"style={{ color: 'rgba(0,0,0,.25)' }}/>} style={{width:300}} placeholder="Username"
            name="username" value={this.state.username} onChange={e=>this.changeValue(e)}/>
            <Input  className={DenLuCss.right1} prefix={<Icon type="lock"style={{ color: 'rgba(0,0,0,.25)' }}/>} style={{width:300}}    placeholder="Password"  
            name="userPassword" value={this.state.userPassword} onChange={e=>this.changeValue(e)}  />
              <div className={DenLuCss.zhuce}><Link to="/zhuce">注册</Link></div> <div className={DenLuCss.wangji}><Link to="wangji" >忘记密码</Link></div>
              <Button onClick={this.upload}  style={{width:150}}   className={DenLuCss.button}>登录
              </Button>
              </from>
              </div>
              </div>
            </div>
        )
    }
}
