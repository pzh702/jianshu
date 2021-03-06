import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultStore = fromJS({
	focused: false,
	list: [],
	page: 1,
	totalPage: 1,
});

const headerReducer = (state = defaultStore, action) => {
	switch (action.type) {
		case constants.SEARCH_FOCUS:
			return state.set("focused", true);
		case constants.SEARCH_BLUR:
			return state.set("focused", false);
		case constants.CHANGE_LIST:
			return state.set("list", action.data).set("totalPage", action.totalPage);
		case constants.CHANGE_PAGE:
			return state.set("page", action.page);
		default:
			return state;
	}
};
export default headerReducer;
