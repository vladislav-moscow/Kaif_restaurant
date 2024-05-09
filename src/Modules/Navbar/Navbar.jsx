/* eslint-disable jsx-a11y/anchor-is-valid */
'use client';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/logo.svg';
import MenuBurger from '@/components/MenuItem/MenuBurger';
import ModalOrder from '@/components/ModalOrder/ModalOrder';

import './navbar.css';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const modalRef = useRef(null);

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
				<Link href='/register' className='p__opensans bottomBorder'>
					Вход / Регистрация
				</Link>
				<div />
				<button onClick={()=> setIsOpen(true)} className='p__opensans bottomBorder'>
					Заказ столика
				</button>
			</div>
			<ModalOrder open={isOpen} modalRef={modalRef} onClose={() => setIsOpen(false)} />
			<div className='app__navbar-smallscreen'>
				<MenuBurger />
			</div>
		</nav>
	);
};

export default Navbar;
