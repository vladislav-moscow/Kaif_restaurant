'use client';
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { useRef } from "react";
import Image from "next/image";

import gallery01 from "@/assets/gallery01.png";
import gallery02 from "@/assets/gallery02.png";
import gallery03 from "@/assets/gallery03.png";
import gallery04 from "@/assets/gallery04.png";


const Carousel = () => {
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
	);
};

export default Carousel;
