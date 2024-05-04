'use client';
import Link from 'next/link';
import { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const MenuBurger = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<>
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
		</>
	);
};

export default MenuBurger;
