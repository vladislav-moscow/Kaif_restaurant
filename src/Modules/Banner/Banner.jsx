'use server';
import Link from 'next/link';
import Image from 'next/image';

import SubHeading from '@/components/SubHeading/SubHeading';

import welcomeImage from '@/assets/welcome.png';

import './banner.css';
import Button from '@/components/Button/Button';

const Banner = () => {
	return (
		<section className='app__header app__wrapper section__padding' id='home'>
			<div className='app__wrapper_info'>
				<SubHeading title='Ищите новый вкус' />
				<h1 className='app__header-h1'>Ключ к изысканной кухне</h1>
				<p className='p__opensans' style={{ margin: '2rem 0' }}>
					Еда - это значит быть счастливым; за столом мы, вероятно, проводим
					свои самые счастливые моменты.{' '}
				</p>
				<Button type={'button'} className={'custom__button'}>
					<Link href='/menu'>Изучить меню</Link>
				</Button>
			</div>
			<div className='app__wrapper_img'>
				<Image src={welcomeImage} alt='banner_img' />
			</div>
		</section>
	);
};

export default Banner;
