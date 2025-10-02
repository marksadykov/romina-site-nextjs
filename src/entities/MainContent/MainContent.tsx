"use client";

import React from "react";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import SendForm from "@/components/SendForm";
import Contacts from "@/components/Contacts";

const MainContent = () => (
  <>
    <About />
    <Portfolio />
    <Services />
    <SendForm />
    <Contacts />
  </>
);

export default MainContent;
