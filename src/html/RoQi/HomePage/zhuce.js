import React from 'react'
import { Input, Icon, Button, message } from 'antd';
import { Link } from 'react-router-dom';
// import Axios from 'axios'
var DenLuCss = require('./denlu.css')
class DenLu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  changeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  upload = () => {
    //XHR
    // var xhr = new XMLHttpRequest()
    var data = {
      "userPhonenumber": this.state.userPhonenumber,
      "username": this.state.username,
      "userPassword": this.state.userPassword
    }
    //open连接
    // xhr.open("post", "/user/register")
    //配置响应函数
    // xhr.onreadystatechange = function (params) {
    //   if (xhr.readyState == 4) {
    //     if (xhr.status == 200) {
    //       console.log(xhr.responseText)
    //       var result = JSON.parse(xhr.responseText)
    //       if (result.state === 4) {
    //         message.info("用户电话已存在")
    //       } else if (result.state === 3) {
    //         message.info("密码为空")
    //       } else if (result.state === 2) {
    //         message.info("用户名重复")
    //       } else if (result.state === 1) {
    //         message.info("注册成功")
    //       }
          // this.props.history.push('/denlu')
    //     } else {
    //       message.info(xhr.status)
    //     }
    //   }
    // }

    // //发送数据
    // xhr.setRequestHeader('content-type', 'application/json')
    // xhr.send(JSON.stringify(data))
    



    //fetch
    fetch("/user/register",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    }).then(response=>response.json())
    .then(result=>{
      if(result.state===4){
        message.info("用户电话已存在")
      }else if(result.state===3){
        message.info("密码为空")
      }else if( result.state===2){
        message.info("用户名重复")    
      }else if( result.state===1){
        message.info("注册成功")
        this.props.history.push('/denlu')
      } 
    }).catch(e=>{
      message.error(e);
    })



    // axios
    // Axios.post({
    //   url:"/user/register",
    //   data:JSON.stringify(data)
    // }).then(result=>{
    //   if(result.state===4){
    //     message.info("用户电话已存在")
    //   }else if(result.state===3){
    //     message.info("密码为空")
    //   }else if( result.state===2){
    //     message.info("用户名重复")    
    //   }else if( result.state===1){
    //     message.info("注册成功")
    //   }
    // })
  }


  render() {

    return (
      <div className={DenLuCss.right}>
        <div className={DenLuCss.border}>
          <div className={DenLuCss.center}>
            
              <Input className={DenLuCss.right1} prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} style={{ width: 300 }} placeholder="Phone"

                name="userPhonenumber" value={this.state.userPhonenumber} onChange={e => this.changeValue(e)} />

              <Input className={DenLuCss.right1} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} style={{ width: 300 }} placeholder="Username"

                name="username" value={this.state.username} onChange={e => this.changeValue(e)} />

              <Input className={DenLuCss.right1} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} style={{ width: 300 }} placeholder="Password"

                name="userPassword" value={this.state.userPassword} onChange={e => this.changeValue(e)} />

              <div className={DenLuCss.zhuce}><Link to="/denlu">登录</Link></div> <div className={DenLuCss.wangji}><Link to="wangji" >忘记密码</Link></div>
              <Button onClick={this.upload} style={{ width: 150 }} className={DenLuCss.button}>注册
              </Button>
            
          </div>
        </div>
      </div>
    )
  }
}
export default DenLu;