import AboutUs from '@/Modules/AboutUs/AboutUs';
import Banner from '@/Modules/Banner/Banner';
import Chief from '@/Modules/Chief/Chief';
import FindUs from '@/Modules/FindUs/FindUs';
import Gallery from '@/Modules/Gallery/Gallery';
import Intro from '@/Modules/Intro/Intro';
import Laurels from '@/Modules/Laurels/Laurels';
import Menu from '@/Modules/Menu/Menu';

export default function Home() {
	return (
		<main>
			<Banner />
			<AboutUs />
			<Menu />
			<Chief />
			<Intro />
			<Laurels/>
			<Gallery/>
			<FindUs/>
		</main>
	);
}
