'use server';
import Image from 'next/image';

import SubHeading from '@/components/SubHeading/SubHeading';
import LaurelsList from '@/components/LaurelsList/LaurelsList';
import laurels from '@/assets/laurels.png';

import './laurels.css';

const Laurels = () => {
	return (
		<div className='app__bg app__wrapper section__padding' id='awards'>
			<div className='app__wrapper_info'>
				<SubHeading title='Награды & признание' />
				<h1 className='headtext__cormorant'>Наши награды</h1>
				<LaurelsList/>
			</div>
			<div className='app__wrapper_img'>
				<Image src={laurels} alt='laurels_img' />
			</div>
		</div>
	);
};

export default Laurels;
