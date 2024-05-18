'use server';
import Image from 'next/image';

import SubHeading from '@/components/SubHeading/SubHeading';

import signImage from '@/assets/sign.png';
import quoteImage from '@/assets/quote.png';
import chefImage from '@/assets/chef.png';

import './chief.css';

const Chief = () => {
	return (
		<section className='app__bg app__wrapper section__padding'>
			<div className='app__wrapper_img app__wrapper_img-reverse'>
				<Image src={chefImage} alt='chef_image' />
			</div>
			<div className='app__wrapper_info'>
				<SubHeading title='Слово шеф-повара' />
				<h1 className='headtext__cormorant'>Во что мы верим</h1>

				<div className='app__chef-content'>
					<div className='app__chef-content_quote'>
						<Image src={quoteImage} alt='quote_image' />
						<p className='p__opensans'>
							Приготовить хороший салат и быть искусным дипломатом –
						</p>
					</div>
					<p className='p__opensans'>
						{' '}
						дело одинаково тонкое: и в том, и в другом случае важно в точности
						знать, сколько употребить масла, а сколько уксуса.{' '}
					</p>
				</div>

				<div className='app__chef-sign'>
					<p>Kevin Luo</p>
					<p className='p__opensans'>Шеф-повар</p>
					<Image src={signImage} alt='sign_image' />
				</div>
			</div>
		</section>
	);
};

export default Chief;
