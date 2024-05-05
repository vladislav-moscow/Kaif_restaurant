'use client';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import VideoComponentMenu from '@/components/VideoComponent/VideoComponentMenu';

import './openMenuTitle.css';
import Topbar from '@/components/Topbar/Topbar';

const OpenMenuTitle = ({ params }) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get(`http://localhost:3001/${params.openMenuTitle}`).then((res) => {
			setData(res.data);
			setLoading(false);
		});
	}, [params.openMenuTitle]);

	if (loading) {
		return <div>Loading...</div>; 
	}
	return (
		<>
			<div className='app__menu-topbar'>
				<VideoComponentMenu />
				<Topbar/>
				<h3 className='app__menu-title'>{data[0].titleName}</h3>
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
