'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './menuTitle.css';

interface MenuData {
  title: string;
  subTitle: string;
  image: string;
}

const MenuTitle: React.FC = () => {
  const [data, setData] = useState<MenuData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/titleMenu');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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