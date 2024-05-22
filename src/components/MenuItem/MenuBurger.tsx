'use client';
import Link from 'next/link';
import React, { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const MenuBurger: React.FC = () => {
	const [toggleMenu, setToggleMenu] = useState<boolean>(false);

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
							<Link href='#about' onClick={() => setToggleMenu(false)}>
								О Нас
							</Link>
						</li>
						<li>
							<Link href='/menu' onClick={() => setToggleMenu(false)}>
								Меню
							</Link>
						</li>
						<li>
							<Link href='#awards' onClick={() => setToggleMenu(false)}>
								Награды
							</Link>
						</li>
						<li>
							<Link href='#contact' onClick={() => setToggleMenu(false)}>
								Контакты
							</Link>
						</li>
					</ul>
				</div>
			)}
		</>
	);
};

export default MenuBurger;
