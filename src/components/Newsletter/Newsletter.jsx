'use server';
import SubHeading from '@/components/SubHeading/SubHeading';
import Button from '../Button/Button';

import './newsletter.css';

const Newsletter = () => (
	<div className='app__newsletter'>
		<div className='app__newsletter-heading'>
			<SubHeading title='Новостная рассылка' className='app__newsletter-heading-wrapper' />
			<h1 className='headtext__cormorant'>Подпишитесь</h1>
			<p className='p__opensans'>
				И никогда не пропускайте последние обновления!
			</p>
		</div>
		<div className='app__newsletter-input flex__center'>
			<input type='email' placeholder='Введите свой адрес электронной почты' />
			<Button type={'button'} className={'custom__button'}>
			Подписаться
			</Button>
		</div>
	</div>
);

export default Newsletter;
