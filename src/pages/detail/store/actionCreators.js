import * as constants from "./constants";
import axios from "axios";

const changeDetail = (title, content) => {
	return {
		type: constants.CHANGE_DETAIL,
		title,
		content,
	};
};

export const getDetail = () => {
	return (dispatch) => {
		axios.get("/api/detail.json").then((res) => {
			const data = res.data.data;
			dispatch(changeDetail(data.title, data.content));
		});
	};
};
