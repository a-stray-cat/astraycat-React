import React from 'react'

export default class Login extends React.Component {

    render() {

        return (
            <form action="/user/login" method="post">
                <table>
                    <tbody>
                        <tr>
                            <td>用户名：</td>
                            <td><input type="text" name="username"/></td>
                        </tr>
                        <tr>
                            <td>密码：</td>
                            <td><input type="password" name="password"/></td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="登录"/></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        )
    }
}