import React from "react";

interface Props {
	className: string;
	children?: React.ReactNode;
	onClick: () => void;
}

const Button: React.FC<Props> = ({ className, children, onClick }) => {
	return (
		<button onClick={onClick} className={className}>
			{children}
		</button>
	);
};

export default Button;
