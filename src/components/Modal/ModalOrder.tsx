'use client';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import TimeOption from '../TimeOption/TimeOption';
import { formatDate } from '@/utils';

import './modalOrder.css';

interface FormData {
  id: string;
  date: string;
  personCount: number;
  comment: string;
  gap: string;
}

interface ModalOrderProps {
  open: boolean;
  onClose: () => void;
}

const ModalOrder: React.FC<ModalOrderProps>  = ({ open, onClose }) => {
	const [dates, setDates] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    id: '',
    date: '',
    personCount: 2,
    comment: '',
    gap: '',
  });

  const modalRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
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
  }, [open, onClose]);

	useEffect(() => {
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
    setDates(generateDates());
  }, []);

	const handleChangeFormData = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (name === 'gap') {
      setSelectedTime(value);
    }
  }, []);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataWithId = {
      ...formData,
      id: nanoid(),
    };
    try {
      const response = await axios.post('http://localhost:3001/tableReservation', formDataWithId);
      console.log(response.data);
      setFormData({
        id: '',
        date: '',
        personCount: 2,
        comment: '',
        gap: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

	const handleDecrease = () => {
    if (formData.personCount > 1) {
      setFormData(prevState => ({
        ...prevState,
        personCount: prevState.personCount - 1,
      }));
    }
  };

  const handleIncrease = () => {
    if (formData.personCount < 6) {
      setFormData(prevState => ({
        ...prevState,
        personCount: prevState.personCount + 1,
      }));
    }
  };

	const timeOptions = [
		'12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00',
		'16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
		'21:00', '22:00', '23:00'
	];

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
			<form onSubmit={handleSubmit} className='modal-form' id='reservationForm'>
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
            {timeOptions.map((time, index) => (
              <TimeOption
                key={index}
                id={`gap${index}`}
                value={time}
                label={time}
                onChange={handleChangeFormData}
                className={selectedTime === time ? 'selected' : ''}
              />
            ))}
          </div>
				</div>
				<div className='form-date__comment'>
					<input
						type='text'
						className='form-date__comment-input'
						value={formData.comment}
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
