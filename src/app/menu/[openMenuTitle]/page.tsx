'use client';

import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import Topbar from '@/components/Topbar/Topbar';
import VideoComponentMenu from '@/components/VideoComponent/VideoComponentMenu';

import './openMenuTitle.css';

interface MenuItem {
	id: number;
	title: string;
	price: number;
	image: string;
	titleName: string;
}

interface OpenMenuTitleProps {
	params: {
		openMenuTitle: string;
	};
}

const OpenMenuTitle: React.FC<OpenMenuTitleProps> = ({ params }) => {
	const [data, setData] = useState<MenuItem[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`http://localhost:3001/${params.openMenuTitle}`);
				setData(res.data);
				setLoading(false);
			} catch (error) {
				console.error('Ошибка при загрузке данных:', error);
				setLoading(false);
			}
		};

		fetchData();
	}, [params.openMenuTitle]);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<div className='app__menu-topbar'>
				<VideoComponentMenu />
				<Topbar />
				<h3 className='app__menu-title'>{data[0]?.titleName}</h3>
				<div className='menuItem__cart'>
					{data.map((item) => (
						<div className='menuItem' key={item.id}>
							<Image
								src={item.image}
								alt='картинка товара'
								className='menuItem-img'
								width={242}
								height={340}
							/>
							<h2 className='menuItem-title'>{item.title}</h2>
							<div className='menuItem-price'>{item.price} ₽</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default OpenMenuTitle;
