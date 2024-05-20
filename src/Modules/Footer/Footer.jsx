/* eslint-disable jsx-a11y/alt-text */
'use server';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import Image from 'next/image';

import Newsletter from '@/components/Newsletter/Newsletter';
import logo from '@/assets/logo.svg';
import spoon from '@/assets/spoon.svg';

import './footer.css';

const Footer = () => {
	return (
		<footer className='app__footer section__padding' id='login'>
			<FooterOverlay />
			<Newsletter />

			<div className='app__footer-links'>
				<div className='app__footer-links_contact'>
					<h1 className='app__footer-headtext'>связаться с нами</h1>
					<p className='p__opensans'>г. Москва, ул. Большая Дмитровка, 13</p>
					<p className='p__opensans'>+7 (495) 266-69-66</p>
					<p className='p__opensans'>+7 (968) 555-12-30</p>
				</div>

				<div className='app__footer-links_logo'>
					<Image src={logo} alt='footer_logo' />
					<p className='p__opensans'>
						&quot;Лучший способ найти себя - это потерять себя в служении
						другим.&quot;
					</p>
					<Image src={spoon} alt='footer_spoon' />
					<div className='app__footer-links_icons'>
						<FiFacebook />
						<FiTwitter />
						<FiInstagram />
					</div>
				</div>

				<div className='app__footer-links_work'>
					<h1 className='app__footer-headtext'>Время работы</h1>
					<p className='p__opensans'>Понедельник-Пятница:</p>
					<p className='p__opensans'>12:00 - 00:00</p>
					<p className='p__opensans'>Суббота-Воскресенье:</p>
					<p className='p__opensans'>12:00 - 02:00</p>
				</div>
			</div>

			<div className='footer__copyright'>
				<p className='p__opensans'>2023 Kaif. Все права защищены.</p>
			</div>
		</footer>
	);
};

const FooterOverlay = () => {
	return (
		<div className='app__footerOverlay'>
			<div className='app__footerOverlay-black' />
			<div className='app__footerOverlay-img app__bg' />
		</div>
	);
};

export default Footer;
