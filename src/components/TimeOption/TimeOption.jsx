import "./timeOptions.css";

const TimeOption = ({ id, value, label, onChange, className }) => {
	const handleChange = (e) => {
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
			<label htmlFor={id} className={`time-gap-label ${className}`} value={value}>
				<span className='gap-text'>{label}</span>
			</label>
		</div>
	);
};

export default TimeOption;
