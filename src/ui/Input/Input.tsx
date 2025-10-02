"use client";

import React, { FC, ChangeEventHandler } from "react";
import s from "./Input.module.scss";

type InputProps = {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: string;
};

const Input: FC<InputProps> = ({ label, value, onChange, type = "text" }) => {
  return (
    <div className={s.container}>
      <input
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
        className={s.input}
      />
    </div>
  );
};

export default Input;
