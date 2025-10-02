"use client";

import React, { FC, ReactNode } from "react";
import Image from "next/image";
import s from "./Card.module.scss";

type CardProps = {
  imgSrc: string;
  size?: number;
  text?: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
};

const Card: FC<CardProps> = ({ imgSrc, text, size = 200, className, onClick }) => {
  return (
    <div 
      className={`${s.container} ${className || ''}`} 
      style={{ width: size, cursor: 'pointer'}} 
      onClick={onClick}
    >
      <Image 
        alt={imgSrc} 
        src={imgSrc} 
        className={s["container__image"]} 
        width={size}
        height={size}
      />
      <div className={s["container__text"]}>{text}</div>
    </div>
  );
};

export default Card;
