import { Component } from "react";
import { List } from "antd";
import "./write.css";
import { connect } from "react-redux";
import { writeActionCreator } from "./store";

class Write extends Component {
	render() {
		const data = this.props.data;
		return (
			<div className="WriteWrapper">
				<List
					className="listContent"
					itemLayout="horizontal"
					dataSource={data}
					bordered={true}
					renderItem={(item) => (
						<List.Item>
							<List.Item.Meta
								title={<a href={item.url}>{item.title}</a>}
								description={item.em}
							/>
							{/* <div className="meta">
								<h4 className="title">
									<a href={item.url}>{item.title}</a>
								</h4>
								<div className="description">{item.em}</div>
							</div> */}
							<div>{item.theme}</div>
						</List.Item>
					)}
				/>
			</div>
		);
	}

	componentDidMount() {
		this.props.getHupuData();
	}
}

const mapState = (state) => {
	return {
		data: state.getIn(["write", "data"]),
	};
};

const mapDispatch = (dispatch) => {
	return {
		getHupuData() {
			dispatch(writeActionCreator.getData());
		},
	};
};

export default connect(mapState, mapDispatch)(Write);
