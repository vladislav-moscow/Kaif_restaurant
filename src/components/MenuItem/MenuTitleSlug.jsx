'use client';

import Image from 'next/image';

const MenuTitleSlug = ({data}) => {
	console.log(data);
	
	return (
    <>
			<Image src={data.image} alt="" className="menuItem-img" />
      <h2 className="menuItem-title">{data.title}</h2>
      <div className="menuItem-price">{data.price} ₽</div>
    </>
  );
};

export default MenuTitleSlug;
