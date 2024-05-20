'use client';
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface Award {
	imgUrl: string;
	title: string;
	subtitle: string;
}

interface AwardCardProps {
	award: Award;
}

// eslint-disable-next-line react/display-name
const AwardCard: React.FC<AwardCardProps> = ({ award: { imgUrl, title, subtitle } }) => {
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

const LaurelsList: React.FC = () => {
	const [dataAward, setDataAward] = useState<Award[]>([]);

	useEffect(() => {
		axios.get<Award[]>('http://localhost:3001/awards').then((res) => {
			setDataAward(res.data);
		});
	}, []);

	const memoizedDataAward = useMemo(() => dataAward, [dataAward]);

	return (
		<div className='app__laurels_awards'>
			{memoizedDataAward.map((award) => (
				<AwardCard award={award} key={award.title} />
			))}
		</div>
	);
};

export default React.memo(LaurelsList);
