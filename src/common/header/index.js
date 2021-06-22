import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { headerActionCreators } from "./store";
import { loginActionCreators } from "../../pages/login/store";
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	// SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button,
} from "./style";

class Header extends Component {
	getListArea() {
		const { focused, list, page } = this.props;

		const newList = list;
		const pageList = [];

		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				);
			}
		}
		if (focused) {
			return (
				<SearchInfo>
					<SearchInfoTitle>
						热门搜索
						{/* <SearchInfoSwitch
							onClick={() => {
								handleChangePage(page, totalPage);
							}}
						>
							换一批
						</SearchInfoSwitch> */}
					</SearchInfoTitle>
					<SearchInfoList>{pageList}</SearchInfoList>
				</SearchInfo>
			);
		} else {
			return null;
		}
	}
	render() {
		const {
			focused,
			handleInputFocus,
			handleInputBlur,
			list,
			page,
			totalPage,
			loginStatus,
			logout,
		} = this.props;
		return (
			<HeaderWrapper>
				<Link to="/">
					<Logo />
				</Link>
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载app</NavItem>
					{loginStatus ? (
						<Link to="/">
							<NavItem className="right" onClick={logout}>
								退出
							</NavItem>
						</Link>
					) : (
						<Link to="/login">
							<NavItem className="right">登录</NavItem>
						</Link>
					)}
					<Link to="/detail">
						<NavItem className="right">
							Aa
							<span className="iconfont icon-Aa"></span>
						</NavItem>
					</Link>

					<SearchWrapper>
						<CSSTransition in={focused} timeout={200} classNames="slide">
							<NavSearch
								className={focused ? "focused" : ""}
								onFocus={() => handleInputFocus(list, page, totalPage)}
								onBlur={handleInputBlur}
							/>
						</CSSTransition>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to="/write">
						<Button className="writting">
							<span className="iconfont icon-pen-fill"></span>
							写文章
						</Button>
					</Link>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		focused: state.getIn(["header", "focused"]),
		list: state.getIn(["header", "list"]),
		page: state.getIn(["header", "page"]),
		totalPage: state.getIn(["header", "totalPage"]),
		loginStatus: state.getIn(["login", "login"]),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list, page, totalPage) {
			list.size === 0 && dispatch(headerActionCreators.getList());
			dispatch(headerActionCreators.searchFocus());
			if (page < totalPage) {
				dispatch(headerActionCreators.changePage(page + 1));
			} else {
				dispatch(headerActionCreators.changePage(1));
			}
		},
		handleInputBlur() {
			dispatch(headerActionCreators.searchBlur());
		},
		handleChangePage(page, totalPage) {
			if (page < totalPage) {
				dispatch(headerActionCreators.changePage(page + 1));
			} else {
				dispatch(headerActionCreators.changePage(1));
			}
		},
		logout() {
			dispatch(loginActionCreators.logout());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
