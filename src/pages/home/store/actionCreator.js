// import { fromJS } from "immutable";
import * as constants from "./constants";

export const changeShowScroll = (show) => {
	return {
		type: constants.SHOW_SCROLL_TOP,
		show,
	};
};
