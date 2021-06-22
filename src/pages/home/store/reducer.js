import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultStore = fromJS({
	showScroll: false,
});

const homeReducer = (state = defaultStore, action) => {
	switch (action.type) {
		case constants.SHOW_SCROLL_TOP:
			return state.set("showScroll", action.show);

		default:
			return state;
	}
};

export default homeReducer;
