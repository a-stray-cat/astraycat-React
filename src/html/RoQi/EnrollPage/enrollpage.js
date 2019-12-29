import React from 'react'
import { Layout, Col, Row } from 'antd'
import Enrollbox from './enrollbox';

const { Content } = Layout;
export default class LoginPage extends React.Component {

    render() {
        return (
            <Layout>
                <Content>
                    <Row>
                        <Col span={8}></Col>
                        <Col span={6}><Enrollbox /> </Col>
                        <Col span={10}></Col>
                    </Row>
                </Content>
            </Layout >

        )
    }
}