import { Component } from "react";
import { connect } from "react-redux";
// import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { loginActionCreators } from "./store";
import { Redirect } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.css";

class Login extends Component {
	onFinish = (values) => {
		console.log("Received values of form: ", values);
	};

	render() {
		const { loginStatus } = this.props;

		if (loginStatus) {
			return <Redirect to="/" />;
			// return <div>hello</div>;
		} else {
			return (
				<div className="loginWrapper">
					<Form
						name="normal_login"
						className="login-form"
						initialValues={{ remember: true }}
						onFinish={this.onFinish}
					>
						<Form.Item
							name="username"
							rules={[
								{ required: true, message: "Please input your Username!" },
							]}
						>
							<Input
								prefix={<UserOutlined className="site-form-item-icon" />}
								placeholder="Username"
							/>
						</Form.Item>
						<Form.Item
							name="password"
							rules={[
								{ required: true, message: "Please input your Password!" },
							]}
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder="Password"
							/>
						</Form.Item>
						<Form.Item>
							<Form.Item name="remember" valuePropName="checked" noStyle>
								<Checkbox>记住密码</Checkbox>
							</Form.Item>

							<a className="login-form-forgot" href="1">
								忘记密码
							</a>
						</Form.Item>

						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								className="login-form-button"
							>
								登录
							</Button>
							Or <a href="1">现在注册</a>
						</Form.Item>
					</Form>
				</div>
			);
		}
	}
}

const mapState = (state) => {
	return {
		loginStatus: state.getIn(["login", "login"]),
	};
};

const mapDispatch = (dispatch) => {
	return {
		login() {
			dispatch(loginActionCreators.login());
		},
	};
};

export default connect(mapState, mapDispatch)(Login);
