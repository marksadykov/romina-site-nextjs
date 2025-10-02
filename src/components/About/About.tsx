"use client";

import React, { FC } from "react";
import s from "./About.module.scss";
import Horizontal from "@/ui/Horizontal";

const About: FC = () => (
  <div className={s.container}>
    <a id="about" className={s["container__anchor"]} />
    <div className={s["container__inner"]}>
      <div className={s["container__inner__title"]}>О нас</div>
      <Horizontal className={s["container__inner__horizontal"]} />
      <div className={s["container__inner__text"]}>
        Мебельное ателье ZOLOTOE - это воплощение ваших идей и реализация
        проектов любой сложности!
        <br />
        Частная мастерская предлагает услуги по изготовлению мебели и предметов
        интерьера премиум класса.
        <br />
        Мастера с высоким профессиональным стажем, обучены современным
        итальянским технологиям и выполняют заказы под строгим надзором
        дизайнера и технолога.
        <br />
        Авторская мебель ручной работы - это идеально подобранный стиль,
        выверенные цветовые решения
        и&nbsp;уникальный&nbsp;интерьер&nbsp;вашего&nbsp;дома.
        <br />
        <br />
        From Russia, with love..
      </div>
    </div>
  </div>
);

export default About;
