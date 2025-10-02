"use client";

import React, { FC } from "react";
import s from "./Button.module.scss";

type ButtonProps = {
  onClick: () => void;
  children?: React.ReactNode;
};

const Button: FC<ButtonProps> = ({ onClick, children = "Отправить" }) => {
  return (
    <button className={s.container} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
