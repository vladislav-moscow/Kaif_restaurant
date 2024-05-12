'use client';
import { useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';

import SubHeading from '@/components/SubHeading/SubHeading';
import Button from '../Button/Button';

import './newsletter.css';

const Newsletter = () => {
	const [inputValue, setInputValue] = useState({
		valueSubscribe: '',
		id: '',
	});

	const handleChangeInput = (e) => {
		setInputValue((prev) => {
			return {
				...prev,
				valueSubscribe: e.target.value,
			};
		});
	};

	const handleChangeFormSubmit = async (e) => {
		e.preventDefault();

		// Добавляем id к объекту inputValue
		const inputValueWithId = {
			...inputValue,
			id: nanoid(),
		};

		try {
			const response = await axios.post(
				'http://localhost:3001/subscribe',
				inputValueWithId
			);
			console.log(response.data);
			// Обработка успешного ответа от сервера

			//сброс данных
			setInputValue({
				id: '',
				valueSubscribe: '',
			});
		} catch (error) {
			console.error('Error submitting form:', error);
			// Обработка ошибки при отправке данных на сервер
		}
	};

	return (
		<div className='app__newsletter'>
			<div className='app__newsletter-heading'>
				<SubHeading
					title='Новостная рассылка'
					className='app__newsletter-heading-wrapper'
				/>
				<h2 className='headtext__cormorant'>Подпишитесь</h2>
				<p className='p__opensans'>
					И никогда не пропускайте последние обновления!
				</p>
			</div>
			<form
				onSubmit={handleChangeFormSubmit}
				className='app__newsletter-input flex__center'
			>
				<input
					type='email'
					required
					placeholder='Введите свой адрес электронной почты'
					onChange={handleChangeInput}
					value={inputValue.valueSubscribe}
				/>
				<Button type={'submit'} className={'custom__button'}>
					Подписаться
				</Button>
			</form>
		</div>
	);
};

export default Newsletter;
