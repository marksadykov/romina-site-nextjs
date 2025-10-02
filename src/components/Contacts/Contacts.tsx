"use client";

import React from "react";
import s from "./Contacts.module.scss";
import Horizontal from "@/ui/Horizontal";
import Image from "next/image";
import InstLogo from "./instagram.svg";
import WhatsappLogo from "./whatsapp.svg";
import Uzor1 from "./uzor1.png";
import Uzor2 from "./uzor2.png";

const Contacts = () => {
  return (
    <div className={s.container}>
      <a id="contacts" className={s["container__anchor"]} />
      <div className={s["container__inner"]}>
        <div className={s["container__inner__title"]}>Контакты</div>
        <Horizontal className={s["container__inner__horizontal"]} />
        <div className={s["container__inner__row"]}>
          <div className={s["container__inner__row__sub"]}>Для заказа</div>
          <a href="mailto:order@zolotoe.vip">order@zolotoe.vip</a>
        </div>
        <div className={s["container__inner__row"]}>
          <div className={s["container__inner__row__sub"]}>
            PR/сотрудничество
          </div>
          <a href="mailto:mebel.atelier@gmail.com">mebel.atelier@gmail.com</a>
        </div>
        <div className={s["container__inner__row"]}>
          <div className={s["container__inner__row__sub"]}>
            <a
              href="https://www.instagram.com/mebel_atelier_zolotoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={InstLogo} alt="Instagram" width={24} height={24} />
              <div>instagram</div>
            </a>
          </div>
          <a href="https://wa.me/79858185888" target="_blank" rel="noopener noreferrer">
            <Image src={WhatsappLogo} alt="WhatsApp" width={24} height={24} />
            <div>Whatsapp</div>
          </a>
        </div>
        <div className={s["container__inner__row__sub"]}>
          © 2010 Мебель на заказ. Эксклюзивные проекты
        </div>
        <div>ИНН 772330957324 ИП Таусон Д.В.</div>
      </div>
      <Image src={Uzor1} alt="Узор 1" className={s["container__uzor-1"]} width={180} height={180} />
      <Image src={Uzor2} alt="Узор 2" className={s["container__uzor-2"]} width={180} height={180} />
    </div>
  );
};

export default Contacts;
