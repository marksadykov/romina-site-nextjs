"use client";

import React, { FC, useCallback, useState } from "react";
import { StaticImageData } from "next/image";
import s from "./WaveCarousel.module.scss";
import Image1 from "./images/1.jpeg";
import Image2 from "./images/2.jpeg";
import Image3 from "./images/3.jpeg";
import Image4 from "./images/4.jpeg";
import Image5 from "./images/5.jpeg";
import ItemCarousel from "./ItemCarousel";

type ItemsCarousel = {
  id: string;
  src: string | StaticImageData;
  isActive?: boolean;
  text?: string;
  href: string;
}[];

const WaveCarousel: FC = () => {
  const [images, setImages] = useState<ItemsCarousel>([
    { id: "0", src: Image1, text: "О нас", href: "/#about" },
    { id: "1", src: Image2, text: "Проекты", href: "/#portfolio" },
    {
      id: "2",
      src: Image3,
      text: "Услуги",
      isActive: true,
      href: "/#services",
    },
    { id: "3", src: Image4, text: "Заказать", href: "/#order" },
    { id: "4", src: Image5, text: "Контакты", href: "/#contacts" },
  ]);

  const imageOnClick = useCallback(
    (id: string) =>
      setImages((prevImages) =>
        prevImages.map((image) => ({
          ...image,
          isActive: image.id === id,
        }))
      ),
    []
  );

  return (
    <div className={s.container}>
      <div className={s["container__carousel"]}>
        {images.map((image) => (
          <ItemCarousel
            key={image.id}
            id={image.id}
            src={image.src}
            isActive={image.isActive}
            text={image.text}
            onClick={imageOnClick}
            href={image.href}
            isSmall={false}
          />
        ))}
      </div>
    </div>
  );
};

export default WaveCarousel;
