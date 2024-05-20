import "./timeOptions.css";

import React from 'react';
import "./timeOptions.css";

interface TimeOptionProps {
	id: string;
	value: string;
	label: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}

const TimeOption: React.FC<TimeOptionProps> = ({ id, value, label, onChange, className }) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e);
	};

	return (
		<div className='gap-wrapper'>
			<input
				type='radio'
				className='timeGap gap'
				id={id}
				name='gap'
				value={value}
				onChange={handleChange}
			/>
			<label htmlFor={id} className={`time-gap-label ${className}`}>
				<span className='gap-text'>{label}</span>
			</label>
		</div>
	);
};

export default React.memo(TimeOption);
