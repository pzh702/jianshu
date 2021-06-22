import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { homeActionCreator } from "./store";
import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
	RecommendWrapper,
	RecommendItem,
	WriterWrapper,
	TopicWrapper,
	TopicItem,
	ListItem,
	ListInfo,
	LoadMore,
	BackTop,
} from "./style";
import img1 from "../../statics/1.png";
import img2 from "../../statics/2.png";
import img3 from "../../statics/3.jpeg";

class Home extends Component {
	getListItem() {
		const itemList = [];
		for (let i = 0; i < 10; i++) {
			itemList.push(
				<Link to="/detail" key={i}>
					<ListItem>
						<img className="pic" src={img3} alt="" />
						<ListInfo>
							<h3 className="title">
								胡歌12年后首谈车祸：既然活下来了，就不能白白活着
							</h3>
							<p className="desc">
								文/麦大人 01 胡歌又刷屏了。
								近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...
							</p>
						</ListInfo>
					</ListItem>
				</Link>
			);
		}
		return itemList;
	}

	handleScrollTop = () => {
		window.scrollTo(0, 0);
	};

	componentWillUnmount() {
		window.removeEventListener("scroll", this.props.changeShowScroll);
	}

	componentDidMount() {
		window.addEventListener("scroll", this.props.changeShowScroll);
	}

	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img
						className="banner-img"
						alt=""
						src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
					/>
					<TopicWrapper>
						<TopicItem>
							<img
								className="topic-pic"
								src="//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
								alt=""
							/>
							社会热点
						</TopicItem>
						<TopicItem>
							<img
								className="topic-pic"
								src="//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
								alt=""
							/>
							手手绘
						</TopicItem>
					</TopicWrapper>
					{this.getListItem()}
					<LoadMore>加载更多</LoadMore>
				</HomeLeft>

				<HomeRight>
					<RecommendWrapper>
						<RecommendItem>
							<img src={img1} alt="" />
						</RecommendItem>
						<RecommendItem>
							<img src={img2} alt="" />
						</RecommendItem>
					</RecommendWrapper>
					<WriterWrapper>HomeWork</WriterWrapper>
				</HomeRight>
				{this.props.showScroll ? (
					<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
				) : null}
			</HomeWrapper>
		);
	}
}

const mapState = (state) => {
	return {
		showScroll: state.getIn(["home", "showScroll"]),
	};
};

const mapDispatch = (dispatch) => {
	return {
		changeShowScroll() {
			dispatch(
				homeActionCreator.changeShowScroll(
					document.documentElement.scrollTop > 100
				)
			);
		},
	};
};

export default connect(mapState, mapDispatch)(Home);
