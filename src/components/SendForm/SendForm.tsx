"use client";

import React, { useCallback, useState } from "react";
import Input from "@/ui/Input";
import Button from "@/ui/Button";
import s from "./SendForm.module.scss";

const SendForm = () => {
  const [name, setName] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [sent, setSent] = useState<boolean>(false);

  const send = useCallback(() => {
    // В Next.js версии можно интегрировать с API route или внешним сервисом
    // Пока что просто показываем успешное сообщение
    console.log("Отправка формы:", { name, tel, email });
    setSent(true);
    
    // Сброс формы через 3 секунды
    setTimeout(() => {
      setSent(false);
      setName("");
      setTel("");
      setEmail("");
    }, 3000);
  }, [name, tel, email]);

  return (
    <div className={s.container}>
      <a id="order" className={s["container__anchor"]} />
      <div className={s["container__back"]} />
      <div className={s["container__inner"]}>
        <div className={s["container__inner__title"]}>Заказать</div>
        <div className={s["container__inner__form"]}>
          <Input
            label="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Телефон"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            type="tel"
          />
          <Input
            label="Почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <Button onClick={send} />
        </div>
        {sent && (
          <div className={s["container__inner__success"]}>
            Сообщение отправлено!
          </div>
        )}
      </div>
    </div>
  );
};

export default SendForm;
