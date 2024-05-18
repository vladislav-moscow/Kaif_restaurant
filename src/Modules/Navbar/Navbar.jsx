/* eslint-disable jsx-a11y/anchor-is-valid */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

import logo from '@/assets/logo.svg';
import MenuBurger from '@/components/MenuItem/MenuBurger';
import ModalOrder from '@/components/Modal/ModalOrder';
import { useUser } from '@/context/UserContext';

import './navbar.css';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const modalRef = useRef(null);
	const { user, setUser } = useUser();

	const handleLogout = () => {
		setUser(null);
		setIsMenuOpen(false);
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className='app__navbar'>
			<div className='app__navbar-logo'>
				<Image src={logo} alt='app__logo' />
			</div>
			<ul className='app__navbar-links'>
				<li className='p__opensans'>
					<Link href='/'>Главная</Link>
				</li>
				<li className='p__opensans'>
					<a href='#about'>О Нас</a>
				</li>
				<li className='p__opensans'>
					<Link href='/menu'>Меню</Link>
				</li>
				<li className='p__opensans'>
					<a href='#awards'>Награды</a>
				</li>
				<li className='p__opensans'>
					<a href='#contact'>Контакты</a>
				</li>
			</ul>
			<div className='app__navbar-login'>
				{user ? (
					<div className='user-menu-container'>
						<span
							className='p__opensans border-b-golden bottomBorder cursor-pointer'
							onClick={toggleMenu}
						>
							{user.username}
						</span>
						<div className={`user-menu ${isMenuOpen ? 'block' : 'hidden'}`}>
							<Link href='/profile' className='user-menu-item'>
								Профиль
							</Link>
							<button onClick={handleLogout} className='user-menu-item'>
								Выйти
							</button>
						</div>
					</div>
				) : (
					<Link href='/auth/register' className='p__opensans bottomBorder'>
						Вход / Регистрация
					</Link>
				)}
				<div className='rightBorder' />
				<button
					onClick={() => setIsOpen(true)}
					className='p__opensans bottomBorder'
				>
					Заказ столика
				</button>
			</div>
			<ModalOrder
				open={isOpen}
				modalRef={modalRef}
				onClose={() => setIsOpen(false)}
			/>
			<div className='app__navbar-smallscreen'>
				<MenuBurger />
			</div>
		</nav>
	);
};

export default Navbar;
