// import axios from "axios";
import * as constants from "./constants";

export const login = () => {
	return { type: constants.LOGIN };
};

export const logout = () => {
	return { type: constants.LOGOUT };
};
