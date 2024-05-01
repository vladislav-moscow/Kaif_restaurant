import SubHeading from '@/components/SubHeading/SubHeading';
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
			<button type='button' className='custom__button'>
				Подписаться
			</button>
		</div>
	</div>
);

export default Newsletter;
