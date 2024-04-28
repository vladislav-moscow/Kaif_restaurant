import AboutUs from '@/Modules/AboutUs/AboutUs';
import Banner from '@/Modules/Banner/Banner';
import Chief from '@/Modules/Chief/Chief';
import Intro from '@/Modules/Intro/Intro';
import Menu from '@/Modules/Menu/Menu';

export default function Home() {
	return (
		<main>
			<Banner />
			<AboutUs />
			<Menu />
			<Chief />
			<Intro />
		</main>
	);
}
