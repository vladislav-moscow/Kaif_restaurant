import Image from 'next/image';
import React from 'react';

import spoon from '@/assets/spoon.svg';

interface SubHeadingProps {
  title: string;
  className?: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({ title, className }) => (
  <div className={className}>
    <p className='p__cormorant'>{title}</p>
    <Image src={spoon} alt='spoon_image' />
  </div>
);

export default React.memo(SubHeading);