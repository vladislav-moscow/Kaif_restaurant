'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';
import Link from 'next/link';

import MenuItem from '@/components/MenuItem/MenuItem';
import SubHeading from '@/components/SubHeading/SubHeading';
import menuImage from '@/assets/menu.png';
import Button from '@/components/Button/Button';

import './menu.css';

const Menu = () => {
	const [dataWine, setDataWine] = useState([]);
	const [dataCocktails, setDataCocktails] = useState([]);
	const [loading, setLoading] = useState(false);
	const [loadingWine, setLoadingWine] = useState(false);

	useEffect(() => {
		setLoadingWine(true);
		axios.get('http://localhost:3001/wine').then((res) => {
			setDataWine(res.data);
			setLoadingWine(false);
		});
		setLoading(true);
		axios.get('http://localhost:3001/cocktails').then((res) => {
			setDataCocktails(res.data);
			setLoading(false);
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
						{loadingWine ? (
							<ClipLoader
								className='loading'
								color={'#ffffff'}
								loading={loadingWine}
								size={50}
							/>
						) : (
							dataWine.map((wine) => (
								<MenuItem
									key={wine.id}
									title={wine.title}
									price={wine.price}
									tags={wine.tags}
								/>
							))
						)}
					</div>
				</div>

				<div className='app__specialMenu-menu_img'>
					<Image src={menuImage} alt='menu__img' />
				</div>
				<div className='app__specialMenu-menu_cocktails  flex__center'>
					<p className='app__specialMenu-menu_heading'>Коктейли</p>
					<div className='app__specialMenu_menu_items'>
						{loading ? (
							<ClipLoader
								className='loading'
								color={'#ffffff'}
								loading={loading}
								size={50}
							/>
						) : (
							dataCocktails.map((cocktail) => (
								<MenuItem
									key={cocktail.id}
									title={cocktail.title}
									price={cocktail.price}
									tags={cocktail.tags}
								/>
							))
						)}
					</div>
				</div>
			</div>
			<div style={{ marginTop: 15 }}>
				<Button type={'button'} className={'custom__button'}>
					<Link href={'/menu'}>Узнать больше </Link>
				</Button>
			</div>
		</section>
	);
};

export default Menu;
