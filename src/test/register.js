import React from 'react';


export default class Register extends React.Component {

    getform=()=>{
        fetch('/user/music_form/getAll')
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                //处理请求得到的数据
            })
    }

    render() {

        return (
            <div>
                <form action="/user/addUser" method="post">
                    <table>
                        <tr>
                            <td>用户名：</td>
                            <td><input type="text" name="U_username"/></td>
                        </tr>
                        <tr>
                            <td>密码：</td>
                            <td><input type="password" name="U_password"/></td>
                        </tr>
                        <tr>
                            <td>确认密码：</td>
                            <td><input type="password" name="confirmpassword"/></td>
                        </tr>
                        <tr>
                            <td>电话号码</td>
                            <td><input type="text" name="U_phonenumber"/></td>
                        </tr>
                        <tr>
                            <td>ID</td>
                            <td><input type="text" name="U_id"/></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="submit" value="注册"/>
                            </td>
                        </tr>
                    </table>
                </form>
                <button onClick={this.getform}>获取表单</button>
            </div>
        )
    }
}
