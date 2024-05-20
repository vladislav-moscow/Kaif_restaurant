'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';

import SubHeading from '@/components/SubHeading/SubHeading';
import Button from '../Button/Button';

import './newsletter.css';

const Newsletter: React.FC = () => {
	const [valueSubscribe, setValueSubscribe] = useState<string>('');

	const handleChangeSubscribe = (e: ChangeEvent<HTMLInputElement>) => {
		setValueSubscribe(e.target.value);
	};

	const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const response = await axios.post('http://localhost:3001/subscribe', {
				valueSubscribe,
				id: nanoid(),
			});

			console.log(response.data);
			// Обработка успешного ответа от сервера

			// Сброс значения поля ввода
			setValueSubscribe('');
		} catch (error) {
			console.error('Error submitting form:', error);
			// Обработка ошибки при отправке данных на сервер
		}
	};

	return (
		<div className='app__newsletter'>
			<div className='app__newsletter-heading'>
				<SubHeading title='Новостная рассылка' className='app__newsletter-heading-wrapper' />
				<h2 className='headtext__cormorant'>Подпишитесь</h2>
				<p className='p__opensans'>И никогда не пропускайте последние обновления!</p>
			</div>
			<form onSubmit={handleSubmitForm} className='app__newsletter-input flex__center'>
				<input
					type='email'
					required
					placeholder='Введите свой адрес электронной почты'
					onChange={handleChangeSubscribe}
					value={valueSubscribe}
				/>
				<Button type='submit' className='custom__button'>Подписаться</Button>
			</form>
		</div>
	);
};

export default Newsletter;
