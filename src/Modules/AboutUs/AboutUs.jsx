'use server';

import Image from 'next/image';

import Button from '@/components/Button/Button';

import logo_main from '@/assets/logo.svg';
import spoon from '@/assets/spoon.svg';
import knife from '@/assets/knife.png';

import './aboutUs.css';

const AboutUs = () => (
	<section
		className='app__aboutus app__bg flex__center section__padding'
		id='about'
	>
		<div className='app__aboutus-overlay flex__center'>
			<Image src={logo_main} alt='G_overlay' />
		</div>
		<div className='app__aboutus-content flex__center'>
			<div className='app__aboutus-content_about'>
				<h1 className='headtext__cormorant'>О Нас</h1>
				<Image src={spoon} alt='about_spoon' className='spoon__img' />
				<p className='p__opensans'>
					KAIF PROVENANCE - ИМЕНИТЫЙ РЕСТОРАН, КОТОРЫЙ НАХОДИТСЯ В САМОМ СЕРДЦЕ
					ИСТОРИЧЕСКОЙ МОСКВЫ. ЭТО КОЛЛАБОРАЦИЯ СТИЛЯ, НЕВЕРОЯТНОГО ВКУСА И
					ВЫСОКИХ СТАНДАРТОВ СЕРВИСА.
				</p>
				<Button type={'button'} className={'custom__button'}>
					Узнать больше
				</Button>
			</div>
			<div className='app__aboutus-content_knife flex__center'>
				<Image src={knife} alt='about_knife' />
			</div>
			<div className='app__aboutus-content_history'>
				<h1 className='headtext__cormorant'>Наша история</h1>
				<Image src={spoon} alt='about_spoon' className='spoon__img' />
				<p className='p__opensans'>
					АВТОРСКАЯ КУХНЯ И БЕЗГРАНИЧНАЯ КОЛЛЕКЦИЯ КОКТЕЙЛЕЙ, МЕСТО ГДЕ ИНТЕРЬЕР
					ПРОРАБОТАН ДО МЕЛОЧЕЙ, РАСТВОРЯЕТ В СВОЕЙ АТМОСФЕРЕ И ОТКРЫВАЕТ ДВЕРЬ
					В МИР НЕВЕРОЯТНЫХ ВКУСОВ.
				</p>
				<Button type={'button'} className={'custom__button'}>
					Узнать больше
				</Button>
			</div>
		</div>
	</section>
);

export default AboutUs;
