'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import './modalOrder.css';
import { formatDate } from '@/utils';

const ModalOrder = ({ open, modalRef, onClose }) => {
	const [personCount, setPersonCount] = useState(2);
	const [selectedDate, setSelectedDate] = useState(''); // Состояние для хранения выбранной даты
	const [dates, setDates] = useState([]); // Состояние для хранения списка дат

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				onClose(); // Вызываем функцию для закрытия модального окна
			}
		};

		if (open) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [open, modalRef, onClose]);

	useEffect(() => {
		// Функция для формирования списка дат
		const generateDates = () => {
			const today = new Date();
			const dateOptions = [];
			for (let i = 0; i < 6; i++) {
				const date = new Date(today);
				date.setDate(date.getDate() + i);
				const formattedDate = formatDate(date);
				dateOptions.push(formattedDate);
			}
			return dateOptions;
		};

		// Устанавливаем список дат в состояние
		setDates(generateDates());
	}, []);

	// Функция для обработки изменения выбранной даты
	const handleDateChange = useCallback((event) => {
		setSelectedDate(event.target.value);
	}, []);

	const handleDecrease = () => {
		if (personCount > 1) {
			setPersonCount(personCount - 1);
		}
	};

	const handleIncrease = () => {
		if (personCount < 6) {
			setPersonCount(personCount + 1);
		}
	};

	return (
		<dialog ref={modalRef} open={open} className='modal-order'>
			<header className='modal-header flex'>
				<h2 className='modal-header__title'>Бронирование в Kaif</h2>
				<button
					type='button'
					className='modal-title__close'
					onClick={() => onClose()}
				>
					Х
				</button>
			</header>
			<form action='' className='modal-form'>
				<div className='form-date__wrapper flex'>
					<label htmlFor='date'>
						<h4 className='form-date__title'>Дата брони</h4>
						<selectmenu>
							<select
								value={selectedDate}
								onChange={handleDateChange}
								name='Date'
								className='form-date__select'
								id='date'
							>
								{dates.map((date, index) => (
									<option key={index} value={date}>
										{date}
									</option>
								))}
							</select>
						</selectmenu>
					</label>
					<label htmlFor='counter' className='counter-visitors'>
						<h4 className='form-date__title'>Кол-во человек</h4>
						<div className='flex'>
							<button
								type='button'
								className='form-date__btn'
								onClick={handleDecrease}
							>
								−
							</button>
							<input
								id='counter'
								type='number'
								value={personCount}
								autoComplete='new-password'
								maxLength={2}
								readOnly
								className='form-date__visitors flex no-spin'
							/>
							<button
								type='button'
								className='form-date__btn'
								onClick={handleIncrease}
							>
								+
							</button>
						</div>
					</label>
				</div>
				<div className='form-date__time-wrapper'>
					<label>
						<h4 className='form-date__title'>Выбор времени</h4>
					</label>
					<div id='gaps' role='group'>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap720'
								name='gap'
								value={720}
								itemProp='0'
							/>
							<label htmlFor='gap720' className='time-gap-label' value={720}>
								<span className='gap-text'> 12:00 </span>
							</label>
						</div>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap750'
								name='gap'
								value={750}
								itemProp='0'
							/>
							<label htmlFor='gap750' className='time-gap-label' value={750}>
								<span className='gap-text'> 12:30 </span>
							</label>
						</div>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap780'
								name='gap'
								value={780}
								itemProp='0'
							/>
							<label htmlFor='gap780' className='time-gap-label' value={780}>
								<span className='gap-text'> 13:00 </span>
							</label>
						</div>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap810'
								name='gap'
								value={810}
								itemProp='0'
							/>
							<label htmlFor='gap810' className='time-gap-label' value={810}>
								<span className='gap-text'> 13:30 </span>
							</label>
						</div>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap840'
								name='gap'
								value={840}
								itemProp='0'
							/>
							<label htmlFor='gap840' className='time-gap-label' value={840}>
								<span className='gap-text'> 14:00 </span>
							</label>
						</div>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap870'
								name='gap'
								value={870}
								itemProp='0'
							/>
							<label htmlFor='gap870' className='time-gap-label' value={870}>
								<span className='gap-text'> 14:30 </span>
							</label>
						</div>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap900'
								name='gap'
								value={900}
								itemProp='0'
							/>
							<label htmlFor='gap900' className='time-gap-label' value={900}>
								<span className='gap-text'> 15:00 </span>
							</label>
						</div>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap930'
								name='gap'
								value={930}
								itemProp='0'
							/>
							<label htmlFor='gap930' className='time-gap-label' value={930}>
								<span className='gap-text'> 15:30 </span>
							</label>
						</div>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap960'
								name='gap'
								value={960}
								itemProp='0'
							/>
							<label htmlFor='gap960' className='time-gap-label' value={960}>
								<span className='gap-text'> 16:00 </span>
							</label>
						</div>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap990'
								name='gap'
								value={990}
								itemProp='0'
							/>
							<label htmlFor='gap990' className='time-gap-label' value={990}>
								<span className='gap-text'> 16:30 </span>
							</label>
						</div>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap1020'
								name='gap'
								value={1020}
								itemProp='0'
							/>
							<label htmlFor='gap1020' className='time-gap-label' value={1020}>
								<span className='gap-text'> 17:00 </span>
							</label>
						</div>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap1050'
								name='gap'
								value={1050}
								itemProp='0'
							/>
							<label htmlFor='gap1050' className='time-gap-label' value={1050}>
								<span className='gap-text'> 17:30 </span>
							</label>
						</div>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap1080'
								name='gap'
								value={1080}
								itemProp='0'
							/>
							<label htmlFor='gap1080' className='time-gap-label' value={1080}>
								<span className='gap-text'> 18:00 </span>
							</label>
						</div>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap1110'
								name='gap'
								value={1110}
								itemProp='0'
							/>
							<label htmlFor='gap1110' className='time-gap-label' value={1110}>
								<span className='gap-text'> 18:30 </span>
							</label>
						</div>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap1140'
								name='gap'
								value={1140}
								itemProp='0'
							/>
							<label htmlFor='gap1140' className='time-gap-label' value={1140}>
								<span className='gap-text'> 19:00 </span>
							</label>
						</div>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap1170'
								name='gap'
								value={1170}
								itemProp='0'
							/>
							<label htmlFor='gap1170' className='time-gap-label' value={1170}>
								<span className='gap-text'> 19:30 </span>
							</label>
						</div>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap1200'
								name='gap'
								value={1200}
								itemProp='0'
							/>
							<label htmlFor='gap1200' className='time-gap-label' value={1200}>
								<span className='gap-text'> 20:00 </span>
							</label>
						</div>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap1230'
								name='gap'
								value={1230}
								itemProp='0'
							/>
							<label htmlFor='gap1230' className='time-gap-label' value={1230}>
								<span className='gap-text'> 20:30 </span>
							</label>
						</div>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap1260'
								name='gap'
								value={1260}
								itemProp='0'
							/>
							<label htmlFor='gap1260' className='time-gap-label' value={1260}>
								<span className='gap-text'> 21:00 </span>
							</label>
						</div>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap1320'
								name='gap'
								value={1320}
								itemProp='0'
							/>
							<label htmlFor='gap1320' className='time-gap-label' value={1320}>
								<span className='gap-text'> 22:00 </span>
							</label>
						</div>
						<div className='gap-wrapper'>
							<input
								type='radio'
								className='timeGap gap'
								id='gap1380'
								name='gap'
								value={1380}
								itemProp='0'
							/>
							<label htmlFor='gap1380' className='time-gap-label' value={1380}>
								<span className='gap-text'> 23:00 </span>
							</label>
						</div>
					</div>
				</div>
				<div className='form-date__comment'>
					<input
						type='text'
						className='form-date__comment-input'
						id='comment'
						maxLength={180}
						name='Comment'
						placeholder='Пожелание к бронированию'
					/>
				</div>
				<p className='form-date__info'>
					Нажимая кнопку «Продолжить» вы принимаете условия
					<span> пользовательского соглашения</span> ,
					<span> политики конфиденциальности</span>
				</p>
			</form>
			<footer className='modal-footer flex'>
				<div></div>
				<button type='button' className='modal-footer__btn' disabled>Забронировать</button>
			</footer>
		</dialog>
	);
};

export default ModalOrder;
