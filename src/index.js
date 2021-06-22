import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./style";
import App from "./App";
import "antd/dist/antd.css";

ReactDOM.render(
	<App>
		<GlobalStyle />
	</App>,
	document.getElementById("root")
);
