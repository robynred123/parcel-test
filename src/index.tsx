import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./components/button";

export const Home = () => {
	const [showDefault, setShowDefault] = useState(true);
    let navigate = useNavigate()
    
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
				<Button
					className="button"
					onClick={() => navigate('/Form')}
					children="To Form!"
				/>
			</div>
		</>
	);
};
