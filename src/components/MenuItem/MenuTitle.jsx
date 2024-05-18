'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './menuTitle.css';

const MenuTitle = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3001/titleMenu').then((res) => {
			setData(res.data);
		});
	}, []);
	 
	return (
		<div className='menu__title'>
			{data.map((nameMenu) => (
				<Link href={`menu/${nameMenu.subTitle}`} key={nameMenu.title}>
					<div className='menu__title-box'>
						<Image
							src={nameMenu.image}
							alt='картинка меню'
							className='menu__title-img'
							width={232}
							height={340}
						/>
						<h2 className='menu__title-title'>{nameMenu.title}</h2>
					</div>
				</Link>
			))}
		</div>
	);
};

export default MenuTitle;
