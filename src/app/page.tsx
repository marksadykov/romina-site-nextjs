import Logo from "@/components/Logo";
import WaveCarousel from "@/components/WaveCarousel";
import MainContent from "@/entities/MainContent";
import ProjectContext from "@/wrappers/ProjectContext";

export default function Home() {
  return (
    <ProjectContext>
      <Logo />
      <WaveCarousel />
      <MainContent />
    </ProjectContext>
  );
}
