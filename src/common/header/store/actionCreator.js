import * as constants from "./constants";
// import { fromJS } from "immutable";
import axios from "axios";

const changeList = (data) => {
	return {
		type: constants.CHANGE_LIST,
		data,
		totalPage: Math.ceil(data.length / 10),
	};
};

export const searchFocus = () => {
	return { type: constants.SEARCH_FOCUS };
};

export const searchBlur = () => {
	return { type: constants.SEARCH_BLUR };
};

export const changePage = (page) => {
	return { type: constants.CHANGE_PAGE, page: page };
};

export const getList = () => {
	return (dispatch) => {
		axios
			.get("/api/headerList.json")
			.then((res) => {
				const data = res.data;
				//更新store中的数据
				dispatch(changeList(data.data));
			})
			.catch(() => {
				console.log("error");
			});
	};
};
