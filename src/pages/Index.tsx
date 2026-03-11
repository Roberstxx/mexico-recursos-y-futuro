import HeroSection from "@/components/HeroSection";
import RecursosNaturalesSection from "@/components/RecursosNaturalesSection";
import PoblacionSection from "@/components/PoblacionSection";
import SectoresEconomicosSection from "@/components/SectoresEconomicosSection";
import DatosEstudianteSection from "@/components/DatosEstudianteSection";
import MapLegend from "@/components/MapLegend";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <MapLegend />
      <HeroSection />
      <RecursosNaturalesSection />
      <PoblacionSection />
      <SectoresEconomicosSection />
      <DatosEstudianteSection />
    </main>
  );
};

export default Index;
