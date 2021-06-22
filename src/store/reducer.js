import { headerReducer } from "../common/header/store";
import { combineReducers } from "redux-immutable";
import { loginReducer } from "../pages/login/store";
import { detailReducer } from "../pages/detail/store";
import { homeReducer } from "../pages/home/store";
import { writeReducer } from "../pages/write/store";

const reducer = combineReducers({
	header: headerReducer,
	login: loginReducer,
	detail: detailReducer,
	home: homeReducer,
	write: writeReducer,
});

export default reducer;
