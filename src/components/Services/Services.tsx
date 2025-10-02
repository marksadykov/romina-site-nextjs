"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import s from "./Services.module.scss";
import Card from "@/ui/Card";

import House from "./images/house.png";
import Couch from "./images/couch.png";
import Kitchen from "./images/kitchen.png";
import Curtains from "./images/curtains.png";
import Pillow from "./images/pillow.png";
import WallMirror from "./images/wall-mirror.png";
import ToolBox from "./images/tool-box.png";
import WoodBoard from "./images/wood-board.png";

const modalContent: ReactNode[] = [
  <ul key="0" style={{ paddingLeft: "10px" }}>
    <li className={s.container__modal__item}>кухни</li>
    <li className={s.container__modal__item}>шкафы</li>
    <li className={s.container__modal__item}>гардеробные</li>
    <li className={s.container__modal__item}>библиотеки, витрины</li>
    <li className={s.container__modal__item}>мебель для ванной</li>
  </ul>,
  <ul key="1" style={{ paddingLeft: "10px" }}>
    <li className={s.container__modal__item}>шпон классический</li>
    <li className={s.container__modal__item}>шпон экзотических пород</li>
    <li className={s.container__modal__item}>шпон камня</li>
    <li className={s.container__modal__item}>буазери</li>
    <li className={s.container__modal__item}>3D</li>
  </ul>,
  <ul key="2" style={{ paddingLeft: "10px" }}>
    <li className={s.container__modal__item}>панно</li>
    <li className={s.container__modal__item}>гравировка</li>
    <li className={s.container__modal__item}>с фацетом</li>
    <li className={s.container__modal__item}>с подсветкой</li>
    <li className={s.container__modal__item}>тонированные и цветные</li>
    <li className={s.container__modal__item}>закаленные (tempered glass)</li>
    <li className={s.container__modal__item}>
      осветленные (opti-white, crystal)
    </li>
    <li className={s.container__modal__item}>винтажные</li>
    <li className={s.container__modal__item}>душевые и перегородки</li>
  </ul>,
  <ul key="3" style={{ paddingLeft: "10px" }}>
    <li className={s.container__modal__item}>диваны</li>
    <li className={s.container__modal__item}>кресла</li>
    <li className={s.container__modal__item}>кровати</li>
    <li className={s.container__modal__item}>пуфы и банкетки</li>
    <li className={s.container__modal__item}>реставрация любой сложности</li>
  </ul>,
  <ul key="4" style={{ paddingLeft: "10px" }}>
    <li className={s.container__modal__item}>индивидуальный пошив</li>
    <li className={s.container__modal__item}>подбор тканей на объекте</li>
    <li className={s.container__modal__item}>
      ткани от производителя на любой вкус (Италия, Франция, Англия, Дубай,
      Турция)
    </li>
    <li className={s.container__modal__item}>
      профессиональная навеска портьер
    </li>
    <li className={s.container__modal__item}>
      установка карнизов (профильные, электро )
    </li>
  </ul>,
  <ul key="5" style={{ paddingLeft: "10px" }}>
    <li className={s.container__modal__item}>портьеры</li>
    <li className={s.container__modal__item}>декоративные подушки</li>
    <li className={s.container__modal__item}>покрывала</li>
    <li className={s.container__modal__item}>постельное белье</li>
    <li className={s.container__modal__item}>именные вышивки</li>
  </ul>,
  <ul key="6" style={{ paddingLeft: "10px" }}>
    <li className={s.container__modal__item}>архитектурные чертежи</li>
    <li className={s.container__modal__item}>техническая документация</li>
    <li className={s.container__modal__item}>3D визуализация</li>
    <li className={s.container__modal__item}>дизайн проект «под ключ»</li>
  </ul>,
  <ul key="7" style={{ paddingLeft: "10px" }}>
    <li className={s.container__modal__item}>
      монтаж встроенной мебели (кухни, столешницы и другое)
    </li>
    <li className={s.container__modal__item}>зеркала и панно</li>
    <li className={s.container__modal__item}>стеновые панели</li>
    <li className={s.container__modal__item}>
      сопутствующие электро и сантехнические работы
    </li>
  </ul>,
];

const Services = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [xCoordinate, setXCoordinate] = useState<number>(0);
  const [yCoordinate, setYCoordinate] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);

  const onClick = (e: React.MouseEvent, index: number) => {
    if (index === 2 || index === 5 || index === 7) {
      setXCoordinate(e.pageX - 100);
      setYCoordinate(e.pageY);
      setShowModal(true);
      return;
    }

    setXCoordinate(e.pageX);
    setYCoordinate(e.pageY);
    setShowModal(true);
  };

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className={s.container}>
      <a id="services" className={s["container__anchor"]} />
      <div className={s["container__inner"]} ref={wrapperRef}>
        <div className={s["container__inner__title"]}>Услуги</div>
        <div
          className={s["container__inner__grid"]}
          style={{ height: "150px" }}
        >
          <Card
            imgSrc={Kitchen.src}
            size={80}
            text="корпусная мебель"
            onClick={(e: React.MouseEvent) => {
              setIndex(0);
              onClick(e, 0);
            }}
          />
          <Card
            imgSrc={WoodBoard.src}
            size={80}
            text="стеновые панели"
            onClick={(e: React.MouseEvent) => {
              setIndex(1);
              onClick(e, 1);
            }}
          />
          <Card
            imgSrc={WallMirror.src}
            size={80}
            text="зеркала"
            onClick={(e: React.MouseEvent) => {
              setIndex(2);
              onClick(e, 2);
            }}
          />
        </div>
        <div
          className={s["container__inner__grid"]}
          style={{ height: "150px" }}
        >
          <Link href="/soft_furniture">
            <Card
              imgSrc={Couch.src}
              size={80}
              text="мягкая мебель"
              onClick={(e: React.MouseEvent) => {
                setIndex(3);
                onClick(e, 3);
              }}
            />
          </Link>

          <Card
            imgSrc={Curtains.src}
            size={70}
            text="пошив портьер"
            onClick={(e: React.MouseEvent) => {
              setIndex(4);
              onClick(e, 4);
            }}
          />
          <Card
            imgSrc={Pillow.src}
            size={80}
            text="премиальный текстиль"
            onClick={(e: React.MouseEvent) => {
              setIndex(5);
              onClick(e, 5);
            }}
          />
        </div>
        <div
          className={s["container__inner__grid"]}
          style={{ height: "150px", justifyContent: "center" }}
        >
          <Card
            imgSrc={House.src}
            size={60}
            text="дизайн-проекты"
            className={s["container__inner__grid__item"]}
            onClick={(e: React.MouseEvent) => {
              setIndex(6);
              onClick(e, 6);
            }}
          />
          <Card
            imgSrc={ToolBox.src}
            size={60}
            text="профессиональная установка"
            onClick={(e: React.MouseEvent) => {
              setIndex(7);
              onClick(e, 7);
            }}
          />
        </div>
      </div>
      {showModal && (
        <div
          style={{
            position: "fixed",
            left: xCoordinate,
            top: yCoordinate,
            zIndex: 1000,
          }}
          className={s.container__modal}
        >
          {modalContent[index]}
        </div>
      )}
    </div>
  );
};

export default Services;
