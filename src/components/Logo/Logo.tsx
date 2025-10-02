"use client";

import React, { FC, useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import s from "./Logo.module.scss";
import { ProjectConsumer } from "@/wrappers/ProjectContext";
import LogoImage from "./images/logo.jpg";
import Uzor1 from "./images/uzor1.png";
import Uzor2 from "./images/uzor2.png";
import Horizontal from "@/ui/Horizontal";
import Image from "next/image";

const Logo: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { changeIsSmallMenu } = useContext(ProjectConsumer);
  
  useEffect(() => {
    changeIsSmallMenu(!inView);
  }, [inView, changeIsSmallMenu]);

  return (
    <div className={s.container} ref={ref}>
      <div className={s["container__inner"]}>
        <Image
          src={LogoImage}
          alt="Romina Logo"
          className={s["container__inner__image"]}
          width={300}
          height={300}
          priority
        />
        <div className={s["container__inner__text"]}>
          Создаем&nbsp;интерьеры{" "}
          <span className={s["container__inner__text__dot"]}>&#9679;</span>{" "}
          Производим&nbsp;мебель{" "}
          <span className={s["container__inner__text__dot"]}>&#9679;</span>{" "}
          Реализуем&nbsp;мечты
        </div>
        <Horizontal className={s["container__inner__horizontal"]} />
        <Image
          src={Uzor1}
          alt="Узор 1"
          className={s["container__inner__uzor-1"]}
          width={180}
          height={180}
        />
        <Image
          src={Uzor2}
          alt="Узор 2"
          className={s["container__inner__uzor-2"]}
          width={180}
          height={180}
        />
      </div>
    </div>
  );
};

export default Logo;
