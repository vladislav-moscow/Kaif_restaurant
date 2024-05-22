/* eslint-disable jsx-a11y/anchor-is-valid */
'use client';
import React, { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/logo.svg';
import MenuBurger from '@/components/MenuItem/MenuBurger';
import ModalOrder from '@/components/Modal/ModalOrder';

import './navbar.css';
import { useUser } from '@/context/UserContext';

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const modalRef = useRef<HTMLDivElement>(null);
	const { user, setUser } = useUser();

	const handleLogout = useCallback(() => {
		setUser(null);
		setIsMenuOpen(false);
	}, [setUser]);

	const toggleMenu = useCallback(() => {
		setIsMenuOpen(prev => !prev);
	}, []);

	return (
		<nav className='app__navbar'>
			<div className='app__navbar-logo'>
				<Image src={logo} alt='app__logo' />
			</div>
			<ul className='app__navbar-links'>
				<NavItem href='/' label='Главная' />
				<NavItem href='#about' label='О Нас' />
				<NavItem href='/menu' label='Меню' />
				<NavItem href='#awards' label='Награды' />
				<NavItem href='#contact' label='Контакты' />
			</ul>
			<div className='app__navbar-login'>
				{user ? (
					<LoggedInMenu username={user.username} handleLogout={handleLogout} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
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

interface NavItemProps {
	href: string;
	label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => (
	<li className='p__opensans'>
		{href.startsWith('/') ? (
			<Link href={href}>{label}</Link>
		) : (
			<a href={href}>{label}</a>
		)}
	</li>
);

interface LoggedInMenuProps {
	username: string;
	handleLogout: () => void;
	isMenuOpen: boolean;
	toggleMenu: () => void;
}

const LoggedInMenu: React.FC<LoggedInMenuProps> = ({ username, handleLogout, isMenuOpen, toggleMenu }) => (
	<div className='user-menu-container'>
		<span className='p__opensans border-b-golden bottomBorder cursor-pointer' onClick={toggleMenu}>
			{username}
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
);

export default React.memo(Navbar);