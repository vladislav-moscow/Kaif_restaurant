/* eslint-disable jsx-a11y/anchor-is-valid */
'use server';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/logo.svg';
import MenuBurger from '@/components/MenuBurger/MenuBurger';

import './navbar.css';

const Navbar = () => {
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
				<a href='/' className='p__opensans bottomBorder'>
					Заказ столика
				</a>
			</div>
			<div className='app__navbar-smallscreen'>
				<MenuBurger/>
			</div>
		</nav>
	);
};

export default Navbar;
