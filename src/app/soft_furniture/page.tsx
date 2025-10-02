import { Metadata } from "next";
import Logo from "@/components/Logo";
import ProjectContext from "@/wrappers/ProjectContext";
import SoftFurniture from "@/entities/SoftFurniture";

export const metadata: Metadata = {
  title: "Мягкая мебель на заказ - Romina",
  description: "Создаем мягкую мебель только на заказ. Учитываем все ваши пожелания, даже самые необычные.",
  keywords: "мягкая мебель, мебель на заказ, диван, кресло, пуф, мягкая мебель на заказ",
  openGraph: {
    title: "Мягкая мебель на заказ - Romina",
    description: "Создаем мягкую мебель только на заказ. Учитываем все ваши пожелания, даже самые необычные.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function SoftFurniturePage() {
  return (
    <ProjectContext>
      <Logo />
      <SoftFurniture />
    </ProjectContext>
  );
}
