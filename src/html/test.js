import React from 'react';


export default class IndexBox extends React.Component {

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
            // <Link to="/user/music_form/getAll">获取表单</Link>
            <div>
                <form action="" method="post">
                    <table>
                        <tr>
                            <td>用户名：</td>
                            <td><input type="text" name="username"/></td>
                        </tr>
                        <tr>
                            <td>密码：</td>
                            <td><input type="password" name="password"/></td>
                        </tr>
                        <tr>
                            <td>确认密码：</td>
                            <td><input type="password" name="confirmpassword"/></td>
                        </tr>
                        <tr>
                            <td>姓名：</td>
                            <td><input type="text" name="name"/></td>
                        </tr>
                        <tr>
                            <td>年龄：</td>
                            <td><input type="text" name="age"/></td>
                        </tr>
                        <tr>
                            <td>性别：</td>
                            <td>
                                <input type="radio" name="gender" value="男"/>男
                                <input type="radio" name="gender" value="女"/>女
                            </td>
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
