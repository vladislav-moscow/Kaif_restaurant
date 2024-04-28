import Link from 'next/link';
import Image from 'next/image';

import { SubHeading } from '@/components';
import welcomeImage from '@/assets/welcome.png';

import './banner.css';

const Banner = () => {
	return (
		<section className='app__header app__wrapper section__padding' id='home'>
			<div className='app__wrapper_info'>
				<SubHeading title='Ищите новый вкус' />
				<h1 className='app__header-h1'>Ключ к изысканной кухне</h1>
				<p className='p__opensans' style={{ margin: '2rem 0' }}>
				Еда - это значит быть счастливым; за столом мы, вероятно, проводим свои самые счастливые моменты.{' '}
				</p>
				<Link href='/menu'>
					<button type='button' className='custom__button'>
						Изучить меню
					</button>
				</Link>
			</div>

			<div className='app__wrapper_img'>
				<Image src={welcomeImage} alt='banner_img'/>
			</div>
		</section>
	);
};

export default Banner;
