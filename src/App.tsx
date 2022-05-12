import React from "react";
import { Routing } from "./Routes";
import "./styles/main.css";

declare var module: {
	hot: {
		accept(path?: string, callback?: () => void): void;
	};
};

export default () => {

	if (module.hot) {
		module.hot.accept();
	}
	return (
    <Routing />
  )
};
