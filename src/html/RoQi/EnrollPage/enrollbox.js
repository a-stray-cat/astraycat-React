import React from 'react'
import { Form, Input, Row, Col, Button } from 'antd';


var EnrollPageCss = require('./enrollbox.css')

class NameInput extends React.Component {
    onChange = e => {
        const { value } = e.target;
        const reg = /^[\u4e00-\u9fa5]+$/;
        if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            this.props.onChange(value);
        }
    };
    render() {
        return (
            <Input
                {...this.props}
                onChange={this.onChange}
                onBlur={this.onBlur}
                maxLength={4}
                style={{ color: "black" }}
            />
        )
    }
}
class IdInput extends React.Component {
    onChange = e => {
        const { value } = e.target;
        const reg = /^-?(0|[1-9][xX0-9]*)(\.[0-9]*)?$/;
        if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            this.props.onChange(value);
        }
    };

    // '.' at the end or only '-' in the input box.
    onBlur = () => {
        const { value, onBlur, onChange } = this.props;
        if (value.charAt(value.length - 1) === '.' || value === '-') {
            onChange(value.slice(0, -1));
        }
        if (onBlur) {
            onBlur();
        }
    };

    render() {
        return (
            <Input
                {...this.props}
                onChange={this.onChange}
                onBlur={this.onBlur}
                maxLength={18}
            />
        );
    }
}

class NumberInput extends React.Component {
    onChange = e => {
        const { value } = e.target;
        const reg = /^-?(0|[1][0-9]*)(\.[0-9]*)?$/;
        if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            this.props.onChange(value);
        }
    };
    render() {
        return (
            <Input
                {...this.props}
                onChange={this.onChange}
                onBlur={this.onBlur}
                maxLength={11}
                style={{ color: "black" }}
            />
        )
    }
}

class EnrollBox extends React.Component {

    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次密码输入不一致！');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    onChange = value => {
        this.setState({ value });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };


        return (
            <div>
                <Row>

                    <Col span={24}>
                        <div className={EnrollPageCss.enrollpage}>
                            <div className={EnrollPageCss.header}></div>
                            <div className={EnrollPageCss.body}>
                                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                    <Form.Item
                                        label={
                                            <span>姓名&nbsp;</span>
                                        }
                                    >
                                        {getFieldDecorator('nickname', {
                                            rules: [{ required: true, message: '请输入你的真实姓名!', whitespace: true }],
                                        })(<NameInput
                                            value={this.state.value}
                                            onChange={this.onChange} 
                                            />)}
                                    </Form.Item>
                                    <Form.Item label="密码" hasFeedback>
                                        {getFieldDecorator('password', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '请设置你的密码!',
                                                },
                                                {
                                                    validator: this.validateToNextPassword,
                                                },
                                            ],
                                        })(<Input.Password />)}
                                    </Form.Item>
                                    <Form.Item label="确认密码" hasFeedback>
                                        {getFieldDecorator('confirm', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '请再次输入密码！',
                                                },
                                                {
                                                    validator: this.compareToFirstPassword,
                                                },
                                            ],
                                        })(<Input.Password 
                                        onBlur={this.handleConfirmBlur} 
                                        />)}
                                    </Form.Item>
                                    <Form.Item label="身份证号">
                                        {getFieldDecorator('text', {
                                            rules: [
                                                { required: true, message: '请输入身份证号码' },
                                            ],
                                        })(<IdInput 
                                        value={this.state.value} 
                                        onChange={this.onChange} 
                                        style={{color:"black"}}
                                        />)}
                                    </Form.Item>

                                    <Form.Item label="电话号码">
                                        {getFieldDecorator('phone', {
                                            rules: [{ required: true, message: '请输入你的电话号码!' }],
                                        })(<NumberInput value={this.state.value} onChange={this.onChange} />)}
                                    </Form.Item>

                                    <Row>
                                        <Col span={3}>
                                        </Col>
                                        <Col span={10}>
                                            <Form.Item {...tailFormItemLayout}>
                                                <Button href="./login"
                                                    type="danger"
                                                    htmlType="submit"
                                                    className={EnrollPageCss.Register}
                                                    style={{color:"black"}}
                                                >
                                                    注册
                                                </Button>
                                            </Form.Item>
                                        </Col>
                                        <Col span={9}>
                                        </Col>
                                    </Row>


                                </Form></div></div></Col>

                </Row></div>
        );
    }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(EnrollBox);

export default WrappedRegistrationForm