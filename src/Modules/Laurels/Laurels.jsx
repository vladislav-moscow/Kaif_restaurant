'use client';
import Image from 'next/image';

import { SubHeading } from '../../components';
//import { images, data } from '../../constants';
import laurels from '@/assets/laurels.png';

import './laurels.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AwardCard = ({award:{ imgUrl, title, subtitle }}) => {
	return (
		<div className='app__laurels_awards-card'>
			<Image src={imgUrl} alt='awards' width={50} height={50} />
			<div className='app__laurels_awards-card_content'>
				<p className='p__cormorant' style={{ color: '#DCCA87' }}>
					{title}
				</p>
				<p className='p__opensans'>{subtitle}</p>
			</div>
		</div>
	);
};

const Laurels = () => {
	const [dataAward, setDataAward] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:3001/awards').then((res) => {
			setDataAward(res.data);
		});
	}, []);

	return (
		<div className='app__bg app__wrapper section__padding' id='awards'>
			<div className='app__wrapper_info'>
				<SubHeading title='Награды & признание' />
				<h1 className='headtext__cormorant'>Наши награды</h1>

				<div className='app__laurels_awards'>
					{dataAward.map((award) => (
						<AwardCard award={award} key={award.title} />
					))}
				</div>
			</div>

			<div className='app__wrapper_img'>
				<Image src={laurels} alt='laurels_img' />
			</div>
		</div>
	);
};

export default Laurels;
