/* eslint-disable jsx-a11y/anchor-is-valid */
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import logo from '@/assets/logo.svg'

import './navbar.css';

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<nav className='app__navbar'>
			<div className='app__navbar-logo'>
				<Image
					src={logo}
					alt='app__logo'
				/>
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
				<Link href='/register' className='p__opensans'>
					Вход / Регистрация
				</Link>
				<div />
				<a href='/' className='p__opensans'>
					Заказ столика
				</a>
			</div>
			<div className='app__navbar-smallscreen'>
				<GiHamburgerMenu
					color='#fff'
					fontSize={27}
					onClick={() => setToggleMenu(true)}
				/>
				{toggleMenu && (
					<div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
						<MdOutlineRestaurantMenu
							fontSize={27}
							className='overlay__close'
							onClick={() => setToggleMenu(false)}
						/>
						<ul className='app__navbar-smallscreen_links'>
							<li>
								<Link href='/home' onClick={() => setToggleMenu(false)}>
									Главная
								</Link>
							</li>
							<li>
								<a href='#about' onClick={() => setToggleMenu(false)}>
									О Нас
								</a>
							</li>
							<li>
								<Link href='/menu' onClick={() => setToggleMenu(false)}>
									Меню
								</Link>
							</li>
							<li>
								<a href='#awards' onClick={() => setToggleMenu(false)}>
									Награды
								</a>
							</li>
							<li>
								<a href='#contact' onClick={() => setToggleMenu(false)}>
									Контакты
								</a>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
