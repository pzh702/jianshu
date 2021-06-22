import * as constants from "./constants";
import axios from "axios";
// import { fromJS } from "immutable";

const changeData = (data) => {
	return {
		type: constants.CHANGE_DATA,
		data,
	};
};

export const getData = () => {
	return (dispatch) => {
		axios.get("/api/hupu_hot.json").then((res) => {
			const data = res.data.data;
			dispatch(changeData(data));
		});
	};
};
