'use client';
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { useRef } from "react";
import Image from "next/image";

import SubHeading from "@/components/SubHeading/SubHeading";
import gallery01 from "@/assets/gallery01.png";
import gallery02 from "@/assets/gallery02.png";
import gallery03 from "@/assets/gallery03.png";
import gallery04 from "@/assets/gallery04.png";

import "./gallery.css";

const Gallery = () => {
  const scrollRef = useRef(null);

  const carousel = [
    gallery01,
    gallery02,
    gallery03,
    gallery04,
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

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
        <button type="button" className="custom__button">
          Посмотреть больше
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {carousel.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
							<Image src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
