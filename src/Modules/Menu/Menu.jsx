'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';

import MenuItem from '@/components/MenuItem/MenuItem';
import SubHeading from '@/components/SubHeading/SubHeading';
import menuImage from '@/assets/menu.png';

import './menu.css';
import Link from 'next/link';

const Menu = () => {
	const [dataWine, setDataWine] = useState([]);
	const [dataCocktails, setDataCocktails] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3001/wine').then((res) => {
			setDataWine(res.data);
		});
	}, []);

	useEffect(() => {
		axios.get('http://localhost:3001/cocktails').then((res) => {
			setDataCocktails(res.data);
		});
	}, []);

	return (
		<section
			className='app__specialMenu flex__center section__padding'
			id='menu'
		>
			<div className='app__specialMenu-title'>
				<SubHeading title='Меню, которое соответствует вашему вкусу' />
				<h1 className='headtext__cormorant'>Cпециальное предложение</h1>
			</div>

			<div className='app__specialMenu-menu'>
				<div className='app__specialMenu-menu_wine  flex__center'>
					<p className='app__specialMenu-menu_heading'>Вино & Пиво</p>
					<div className='app__specialMenu_menu_items'>
						{dataWine.map((wine, index) => (
							<MenuItem
								key={wine.title + index}
								title={wine.title}
								price={wine.price}
								tags={wine.tags}
							/>
						))}
					</div>
				</div>

				<div className='app__specialMenu-menu_img'>
					<Image src={menuImage} alt='menu__img' />
				</div>

				<div className='app__specialMenu-menu_cocktails  flex__center'>
					<p className='app__specialMenu-menu_heading'>Коктейли</p>
					<div className='app__specialMenu_menu_items'>
						{dataCocktails.map((cocktail, index) => (
							<MenuItem
								key={cocktail.title + index}
								title={cocktail.title}
								price={cocktail.price}
								tags={cocktail.tags}
							/>
						))}
					</div>
				</div>
			</div>

			<div style={{ marginTop: 15 }}>
				<button type='button' className='custom__button'>
					<Link href={'/menu'}>Узнать больше </Link>
				</button>
			</div>
		</section>
	);
};

export default Menu;
