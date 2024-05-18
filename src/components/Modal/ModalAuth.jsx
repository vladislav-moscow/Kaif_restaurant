'use client;';
import { useEffect } from 'react';

const ModalAuth = ({ open, modalRef, onClose }) => {
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
	return (
		<dialog ref={modalRef} open={open} className='modal-order'>
			<header className='modal-header flex'>
				<h2 className='modal-header__title'>Вход в Kaif</h2>
				<button
					type='button'
					className='modal-title__close'
					onClick={() => onClose()}
				>
					Х
				</button>
			</header>
			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<form className='space-y-6' method='POST'>
					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium leading-6 text-gray-900'
						>
							Email address
						</label>
						<div className='mt-2'>
							<input
								id='email'
								name='email'
								type='email'
								autoComplete='email'
								required
								className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4'
							/>
						</div>
					</div>
					<div>
						<div className='flex items-center justify-between'>
							<label
								htmlFor='password'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Password
							</label>
							<div className='text-sm'>
								<a
									href='#'
									className='font-semibold text-indigo-600 hover:text-indigo-500'
								>
									Forgot password?
								</a>
							</div>
						</div>
						<div className='mt-2'>
							<input
								id='password'
								name='password'
								type='password'
								autoComplete='current-password'
								required
								className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div>
						<button
							type='submit'
							className='w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 justify-center'
						>
							Войти
						</button>
					</div>
				</form>
				<p className='mt-10 text-center text-sm text-gray-500'>
					Not a member?{' '}
					<a
						href='#'
						className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
					>
						Start a 14 day free trial
					</a>
				</p>
			</div>
		</dialog>
	);
};

export default ModalAuth;
