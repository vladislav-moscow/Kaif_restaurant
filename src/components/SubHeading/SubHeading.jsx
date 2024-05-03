
import Image from 'next/image';

import spoon from '@/assets/spoon.svg';

const SubHeading = ({ title, className }) => (
	<div className={className}>
		<p className='p__cormorant'>{title}</p>
		<Image src={spoon} alt='spoon_image' />
	</div>
);

export default SubHeading;
