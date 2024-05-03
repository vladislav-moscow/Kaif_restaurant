'use server';
import Link from "next/link";

import SubHeading from "@/components/SubHeading/SubHeading";
import Carousel from "@/components/Carousel/Carousel";
import Button from "@/components/Button/Button";

import "./gallery.css";

const Gallery = () => {
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Фотогалерея</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Фото нашего потрясающего ресторана, где можно увидить как дизайн
          самого ресторана так и блюд, напитков.
        </p>
				<Button type={'button'} className={'custom__button'}>
					<Link href='https://www.instagram.com/'>Посмотреть больше</Link>
				</Button>
      </div>
      <Carousel/>
    </div>
  );
};

export default Gallery;
