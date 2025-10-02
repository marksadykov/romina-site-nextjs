import React, { FC } from "react";
import cn from "classnames";
import s from "./Horizontal.module.scss";

type HorizontalProps = { className?: string };

const Horizontal: FC<HorizontalProps> = ({ className }) => {
  return (
    <div className={cn(s.container, className)}>
      <div className={s["container__arrow-left"]} />
      <div className={s["container__circle"]} />
      <div className={s["container__center"]} />
      <div className={s["container__circle"]} />
      <div className={s["container__arrow-right"]} />
    </div>
  );
};

export default Horizontal;
