import React, { FC } from "react";
import cn from "classnames";
import s from "./ltemCarousel.module.scss";

const ItemCarousel: FC<{ isActive?: boolean }> = ({ isActive }) => {
  return <div className={cn(s.container, isActive && s["container_active"])} />;
};

export default ItemCarousel;