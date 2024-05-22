'use server';
import VideoComponent from '@/components/VideoComponent/VideoComponents';

import './intro.css';

const Intro = () => {
	return (
		<section className='app__video'>
			<VideoComponent />
		</section>
	);
};

export default Intro;
