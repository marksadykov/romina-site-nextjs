import React from "react";
import s from "./SoftFurniture.module.scss";
import Link from "next/link";

const SoftFurniture = () => (
  <div className={s.container}>
    <div className={s.container__breads}>
      <Link href="/">
        <span>главная</span>
      </Link>
      <span>/</span>
      <span className={s.container__breads__active}>мягкая мебель</span>
    </div>
    <p className={s.container__header}>
      Мы создаем мягкую мебель только на заказ. Учитываем все Ваши пожелания,
      даже самые необычные.
    </p>
  </div>
);

export default SoftFurniture;
