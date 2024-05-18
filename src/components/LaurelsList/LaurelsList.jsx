'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
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

const LaurelsList = () => {
	const [dataAward, setDataAward] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:3001/awards').then((res) => {
			setDataAward(res.data);
		});
	}, []);
	return (
		<div className='app__laurels_awards'>
			{dataAward.map((award) => (
				<AwardCard award={award} key={award.title} />
			))}
		</div>
	);
};

export default LaurelsList;
