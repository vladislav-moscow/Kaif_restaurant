import React, { FC, ReactNode } from 'react';

interface ButtonProps {
	type: 'button' | 'submit' | 'reset';
	className?: string;
	children: ReactNode;
}

const Button: FC<ButtonProps> = ({ type, className, children }) => {
	return (
		<button type={type} className={className}>
			{children}
		</button>
	);
};

export default Button;