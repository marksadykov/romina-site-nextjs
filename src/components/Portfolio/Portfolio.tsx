"use client";

import React, { useState } from "react";
import { StaticImageData } from "next/image";
import s from "./Portfolio.module.scss";
import Image from "next/image";
import Image1 from "./images/image1.jpg";
import Image2 from "./images/image2.jpg";
import Image3 from "./images/image3.jpg";
import Image4 from "./images/image4.jpg";
import Image5 from "./images/image5.jpg";
import { Carousel } from "nuka-carousel";
import Horizontal from "@/ui/Horizontal";

type Image = { id: string; src: string | StaticImageData };

const images = {
  "1": { id: "1", src: Image1 },
  "2": { id: "2", src: Image2 },
  "3": { id: "3", src: Image3 },
  "4": { id: "4", src: Image4 },
  "5": { id: "5", src: Image5 },
};

const Portfolio = () => {
  const [image, setImage] = useState<Image>(images["1"]);

  return (
    <div className={s.container}>
      <a id="portfolio" className={s["container__anchor"]} />
      <div className={s["container__inner"]}>
        <div className={s["container__inner__title"]}>Проекты</div>
        <Horizontal className={s["container__inner__horizontal"]} />
      </div>
      <div className={s["container__grid"]}>
        <div className={s["container__grid__column"]}>
          <div className={s["container__grid__column__title"]}>
            76 реализованных проектов
          </div>
          <div className={s["container__grid__column__sub-title"]}>
            Загородные резиденции, частные виллы, элитные ЖК
          </div>
          <div
            onMouseEnter={() => setImage(images["1"])}
            onMouseLeave={() => setImage(images["1"])}
            className={s["container__grid__column__item-a"]}
          >
            мягкая мебель
          </div>
          <div className={s["container__grid__column__item-b"]}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "80px",
              }}
            >
              <span
                onMouseEnter={() => setImage(images["2"])}
                onMouseLeave={() => setImage(images["1"])}
                className={s["container__grid__column__item-b__item"]}
              >
                кухни
              </span>
              <span
                style={{ marginRight: "30px" }}
                onMouseEnter={() => setImage(images["3"])}
                onMouseLeave={() => setImage(images["1"])}
                className={s["container__grid__column__item-b__item"]}
              >
                спальни
              </span>
            </div>
          </div>
          <div
            onMouseEnter={() => setImage(images["4"])}
            onMouseLeave={() => setImage(images["1"])}
            className={s["container__grid__column__item-e"]}
          >
            гардеробные
          </div>
          <div
            onMouseEnter={() => setImage(images["5"])}
            onMouseLeave={() => setImage(images["1"])}
            className={s["container__grid__column__item-c"]}
          >
            мебель для ванной
          </div>

          <div className={s["container__grid__column__item-d"]}>
            <a
              href="https://www.instagram.com/mebel_atelier_zolotoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>больше фото &#8827;</span>
              {"  "}
              instagram
            </a>
          </div>
        </div>
        <div className={s["container__grid__column"]}>
          <Image
            src={image.src}
            alt={`Portfolio image ${image.id}`}
            className={s["container__grid__column__image"]}
            width={600}
            height={800}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      <div className={s["container__grid-phone"]}>
        <Carousel
          autoplayInterval={7000}
          autoplay
        >
          <Image
            src={images["1"].src}
            className={s["container__grid-phone__image"]}
            width={400}
            height={500}
            alt="Portfolio 1"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Image
            src={images["2"].src}
            className={s["container__grid-phone__image"]}
            width={400}
            height={500}
            alt="Portfolio 2"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Image
            src={images["3"].src}
            className={s["container__grid-phone__image"]}
            width={400}
            height={500}
            alt="Portfolio 3"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Image
            src={images["4"].src}
            className={s["container__grid-phone__image"]}
            width={400}
            height={500}
            alt="Portfolio 4"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Image
            src={images["5"].src}
            className={s["container__grid-phone__image"]}
            width={400}
            height={500}
            alt="Portfolio 5"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Portfolio;
