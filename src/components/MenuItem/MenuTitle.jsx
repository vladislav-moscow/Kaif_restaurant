'use client';
import Link from 'next/link';
import './menuTitle.css';
import Image from 'next/image';

const MenuTitle = ({ data }) => {
	 
	return (
		<div className='menu__title'>
			{data.map((nameMenu) => (
				<Link href={`menu/${nameMenu.subTitle}`} key={nameMenu.title}>
					<div className='menu__title-box'>
						<Image
							src={nameMenu.image}
							alt='картинка меню'
							className='menu__title-img'
							width={232}
							height={340}
						/>
						<h2 className='menu__title-title'>{nameMenu.title}</h2>
					</div>
				</Link>
			))}
		</div>
	);
};

export default MenuTitle;
