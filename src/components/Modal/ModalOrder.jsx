'use client';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';

import { formatDate } from '@/utils';
import TimeOption from '../TimeOption/TimeOption';

import './modalOrder.css';

const ModalOrder = ({ open, modalRef, onClose }) => {
	const [dates, setDates] = useState([]); // Состояние для хранения списка дат
	const [selectedTime, setSelectedTime] = useState(''); // выбранное время
	const [formData, setFormData] = useState({
		id: '',
		date: '',
		personCount: 2,
		сomment: '',
		gap: '',
	}); // объект формы

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

	const handleChangeFormData = useCallback((event) => {
		setFormData((prev) => {
			return {
				...prev,
				[event.target.name]: event.target.value,
			};
		});
		setSelectedTime(event.target.value);
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Добавляем id к объекту formData
		const formDataWithId = {
			...formData,
			id: nanoid(),
		};
		try {
			const response = await axios.post(
				'http://localhost:3001/tableReservation',
				formDataWithId
			);
			console.log(response.data);
			// Обработка успешного ответа от сервера

			//сброс данных

			setFormData({
				id: '',
				date: '',
				personCount: 2,
				сomment: '',
				gap: '',
			});
		} catch (error) {
			console.error('Error submitting form:', error);
			// Обработка ошибки при отправке данных на сервер
		}
	};

	const handleDecrease = () => {
		if (formData.personCount > 1) {
			setFormData((prevState) => ({
				...prevState,
				personCount: prevState.personCount - 1,
			}));
		}
	};

	const handleIncrease = () => {
		if (formData.personCount < 6) {
			setFormData((prevState) => ({
				...prevState,
				personCount: prevState.personCount + 1,
			}));
		}
	};

	return (
		<dialog ref={modalRef} open={open} className='modal-order'>
			<header className='modal-header flexBlock'>
				<h2 className='modal-header__title'>Бронирование в Kaif</h2>
				<button
					type='button'
					className='modal-title__close'
					onClick={() => onClose()}
				>
					Х
				</button>
			</header>
			<form
				onSubmit={handleSubmit}
				action=''
				className='modal-form'
				id='reservationForm'
			>
				<div className='form-date__wrapper flexBlock'>
					<label htmlFor='date'>
						<h4 className='form-date__title'>Дата брони</h4>
						<select
							value={formData.date}
							onChange={handleChangeFormData}
							name='date'
							className='form-date__select'
							id='date'
						>
							<option value=''>Выберите дату</option>
							{dates.map((date, index) => (
								<option key={index} value={date}>
									{date}
								</option>
							))}
						</select>
					</label>
					<label htmlFor='counter' className='counter-visitors'>
						<h4 className='form-date__title'>Кол-во человек</h4>
						<div className='flexBlock'>
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
								value={formData.personCount}
								onChange={handleChangeFormData}
								autoComplete='new-password'
								maxLength={2}
								readOnly
								className='form-date__visitors flexBlock no-spin'
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
						<TimeOption
							id='gap720'
							value='12:00'
							label='12:00'
							onChange={handleChangeFormData}
							className={selectedTime === '12:00' ? 'selected' : ''}
						/>
						<TimeOption
							id='gap750'
							value='12:30'
							label='12:30'
							onChange={handleChangeFormData}
							className={selectedTime === '12:30' ? 'selected' : ''}
						/>
						<TimeOption
							id='gap780'
							value='13:00'
							label='13:00'
							onChange={handleChangeFormData}
							className={selectedTime === '13:00' ? 'selected' : ''}
						/>
						<TimeOption
							id='gap810'
							value='13:30'
							label='13:30'
							onChange={handleChangeFormData}
							className={selectedTime === '13:30' ? 'selected' : ''}
						/>
						<TimeOption
							id='gap840'
							value='14:00'
							label='14:00'
							onChange={handleChangeFormData}
							className={selectedTime === '14:00' ? 'selected' : ''}
						/>
						<TimeOption
							id='gap870'
							value='14:30'
							label='14:30'
							onChange={handleChangeFormData}
							className={selectedTime === '14:30' ? 'selected' : ''}
						/>
						<TimeOption
							id='gap900'
							value='15:00'
							label='15:00'
							onChange={handleChangeFormData}
							className={selectedTime === '15:00' ? 'selected' : ''}
						/>
						<TimeOption
							id='gap930'
							value='15:30'
							label='15:30'
							onChange={handleChangeFormData}
							className={selectedTime === '15:30' ? 'selected' : ''}
						/>
						<TimeOption
							id='gap960'
							value='16:00'
							label='16:00'
							onChange={handleChangeFormData}
							className={selectedTime === '16:00' ? 'selected' : ''}
						/>
						<TimeOption
							id='gap990'
							value='16:30'
							label='16:30'
							onChange={handleChangeFormData}
							className={selectedTime === '16:30' ? 'selected' : ''}
						/>
						<TimeOption
							id='gap1020'
							value='17:00'
							label='17:00'
							onChange={handleChangeFormData}
							className={selectedTime === '17:00' ? 'selected' : ''}
						/>
						<TimeOption
							id='gap1050'
							value='17:30'
							label='17:30'
							onChange={handleChangeFormData}
							className={selectedTime === '17:30' ? 'selected' : ''}
						/>
						<TimeOption
							id='gap1080'
							value='18:00'
							label='18:00'
							onChange={handleChangeFormData}
							className={selectedTime === '18:00' ? 'selected' : ''}
						/>
						<TimeOption
							id='gap1110'
							value='18:30'
							label='18:30'
							onChange={handleChangeFormData}
							className={selectedTime === '18:30' ? 'selected' : ''}
						/>
						<TimeOption
							id='gap1140'
							value='19:00'
							label='19:00'
							onChange={handleChangeFormData}
							className={selectedTime === '19:00' ? 'selected' : ''}
						/>
						<TimeOption
							id='gap1170'
							value='19:30'
							label='19:30'
							onChange={handleChangeFormData}
							className={selectedTime === '19:30' ? 'selected' : ''}
						/>
						<TimeOption
							id='gap1200'
							value='20:00'
							label='20:00'
							onChange={handleChangeFormData}
							className={selectedTime === '20:00' ? 'selected' : ''}
						/>
						<TimeOption
							id='gap1230'
							value='20:30'
							label='20:30'
							onChange={handleChangeFormData}
							className={selectedTime === '20:30' ? 'selected' : ''}
						/>
						<TimeOption
							id='gap1260'
							value='21:00'
							label='21:00'
							onChange={handleChangeFormData}
							className={selectedTime === '21:00' ? 'selected' : ''}
						/>
						<TimeOption
							id='gap1320'
							value='22:00'
							label='22:00'
							onChange={handleChangeFormData}
							className={selectedTime === '22:00' ? 'selected' : ''}
						/>
						<TimeOption
							id='gap1380'
							value='23:00'
							label='23:00'
							onChange={handleChangeFormData}
							className={selectedTime === '23:00' ? 'selected' : ''}
						/>
					</div>
				</div>
				<div className='form-date__comment'>
					<input
						type='text'
						className='form-date__comment-input'
						value={formData.сomment}
						id='comment'
						onChange={handleChangeFormData}
						maxLength={180}
						name='сomment'
						placeholder='Пожелание к бронированию'
					/>
				</div>
				<p className='form-date__info'>
					Нажимая кнопку «Забронировать» вы принимаете условия
					<span> пользовательского соглашения</span> ,
					<span> политики конфиденциальности</span>
				</p>
			</form>
			<footer className='modal-footer flexBlock'>
				<div></div>
				<button
					type='submit'
					form='reservationForm'
					className='modal-footer__btn'
					disabled={!formData.gap}
				>
					Забронировать
				</button>
			</footer>
		</dialog>
	);
};

export default ModalOrder;
