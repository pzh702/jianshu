import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
	data: [],
});

const writeReducer = (state = defaultState, action) => {
	switch (action.type) {
		case constants.CHANGE_DATA:
			return state.set("data", action.data);
		default:
			return state;
	}
};

export default writeReducer;
