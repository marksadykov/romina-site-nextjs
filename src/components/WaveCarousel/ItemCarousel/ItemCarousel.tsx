"use client";

import React, { FC, useContext, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import s from "./ItemCarousel.module.scss";
import { ProjectConsumer } from "@/wrappers/ProjectContext";

type ItemCarousel = {
  id: string;
  src: string | StaticImageData;
  isActive?: boolean;
  text?: string;
  href: string;
  isSmall?: boolean;
};

export type ItemsCarousel = ItemCarousel[];

export type ItemCarouselProps = {
  onClick: (id: string) => void;
} & ItemCarousel;

const defaultApiStyle = {
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  scale: 1,
  zoom: 0,
  x: 0,
  y: 0,
  config: { mass: 5, tension: 350, friction: 40 },
};

const ItemCarousel: FC<ItemCarouselProps> = ({
  id,
  src,
  text,
  onClick,
  href,
  isSmall = true,
}) => {
  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault();
    document.addEventListener("gesturestart", preventDefault);
    document.addEventListener("gesturechange", preventDefault);

    return () => {
      document.removeEventListener("gesturestart", preventDefault);
      document.removeEventListener("gesturechange", preventDefault);
    };
  }, []);

  const domTarget = useRef<HTMLDivElement>(null);
  const [{ x, y, rotateX, rotateY, rotateZ, scale }, api] = useSpring(
    () => defaultApiStyle
  );

  useEffect(() => {
    if (isSmall) {
      api({ scale: 1.05 });
      return;
    }
    api({ scale: 1 });
  }, [isSmall, api]);

  useGesture(
    {
      onHover: ({ hovering }) => {
        if (hovering) {
          api({ rotateX: 0, rotateY: 10, scale: 1.1 });
        } else {
          api(defaultApiStyle);
        }
      },
    },
    { domTarget: domTarget as React.RefObject<EventTarget>, eventOptions: { passive: false } }
  );

  const { isSmallMenu } = useContext(ProjectConsumer);

  return (
    <div className={s.container}>
      <Link href={href}>
        <animated.div
          ref={domTarget}
          style={{
            transform: "perspective(600px)",
            x,
            y,
            scale,
            rotateX,
            rotateY,
            rotateZ,
          }}
          className={s["container__image"]}
          onClick={() => onClick(id)}
        >
          <Image
            alt={`Carousel item ${id}`}
            src={src}
            width={300}
            height={400}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </animated.div>
        {text && (
          <div
            className={`${s["container__text"]} ${
              isSmallMenu ? s["container__text_small"] : ""
            }`}
          >
            {text}
          </div>
        )}
      </Link>
    </div>
  );
};

export default ItemCarousel;
