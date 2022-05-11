import React, { useState } from "react";
import Button from "./components/button";
import "./styles/main.css";

declare var module: {
	hot: {
		accept(path?: string, callback?: () => void): void;
	};
};

export default () => {
	const [showDefault, setShowDefault] = useState(true);

	if (module.hot) {
		module.hot.accept();
	}
	return (
		<>
			<h1 className="text">
				{showDefault ? "Hello world!" : "Goodbye world!"}
			</h1>
      <div className="buttonContainer"> 
        <Button
				className="button"
				onClick={() => setShowDefault(!showDefault)}
				children="Click Me"
			/>
      </div>
			
		</>
	);
};
