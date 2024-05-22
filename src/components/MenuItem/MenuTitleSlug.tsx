'use client';

import Image from 'next/image';
import React from 'react';

interface MenuData {
  image: string;
  title: string;
  price: number;
}

interface MenuTitleSlugProps {
  data: MenuData;
}

const MenuTitleSlug: React.FC<MenuTitleSlugProps> = ({ data }) => {
  console.log(data);
  
  return (
    <>
      <Image src={data.image} alt={data.title} className="menuItem-img" width={232} height={340} />
      <h2 className="menuItem-title">{data.title}</h2>
      <div className="menuItem-price">{data.price} ₽</div>
    </>
  );
};

export default MenuTitleSlug;