import { Component } from "react";
import React from "react";
import { connect } from "react-redux";
import { DetailWrapper, Header, Content } from "./style";
import { detailCreators } from "./store";

class Detail extends Component {
	render() {
		return (
			<DetailWrapper>
				<Header>{this.props.title}</Header>
				<Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
			</DetailWrapper>
		);
	}

	componentDidMount() {
		this.props.getDetail();
	}
}

const mapState = (state) => {
	return {
		title: state.getIn(["detail", "title"]),
		content: state.getIn(["detail", "content"]),
	};
};

const mapDispatch = (dispatch) => {
	return {
		getDetail() {
			dispatch(detailCreators.getDetail());
		},
	};
};

export default connect(mapState, mapDispatch)(Detail);
