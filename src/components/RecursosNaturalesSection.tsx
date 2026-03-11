import { useEffect, useRef, useState } from "react";
import recursosImg from "@/assets/recursos-naturales.jpg";
import { Droplets, Sun, Wind, Gem, Fuel, Mountain } from "lucide-react";

const AnimateIn = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
};

const renovables = [
  { icon: Sun, title: "Energía Solar", desc: "México recibe una irradiación solar promedio de 5.5 kWh/m² diarios, ubicándolo entre los países con mayor potencial solar del mundo." },
  { icon: Wind, title: "Energía Eólica", desc: "El Istmo de Tehuantepec es una de las regiones con mayores corrientes de viento aprovechables en América Latina." },
  { icon: Droplets, title: "Recursos Hídricos", desc: "El país cuenta con 51 ríos principales y 653 acuíferos, aunque la distribución del agua es profundamente desigual entre norte y sur." },
];

const noRenovables = [
  { icon: Fuel, title: "Petróleo y Gas", desc: "México fue durante décadas uno de los principales productores de petróleo del mundo. Pemex sigue siendo pilar de la economía, aunque la producción ha declinado desde 2004." },
  { icon: Gem, title: "Minerales", desc: "Primer productor mundial de plata, con yacimientos importantes de oro, cobre, zinc y litio. La minería aporta aproximadamente 2.4% del PIB." },
  { icon: Mountain, title: "Suelos y Bosques", desc: "64.5 millones de hectáreas de bosques y selvas, pero la deforestación avanza a un ritmo de 150,000 hectáreas anuales." },
];

const RecursosNaturalesSection = () => {
  return (
    <section id="recursos" className="border-t border-primary">
      {/* Section header */}
      <div className="section-agave p-6 md:p-12 lg:p-20">
        <AnimateIn>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary-foreground/60 mb-4">
            01 — La Tierra
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Recursos Naturales de México
          </h2>
          <p className="font-body text-base text-primary-foreground/80 max-w-2xl mt-6 leading-relaxed">
            México es considerado un país megadiverso: alberga entre el 10% y 12% de la biodiversidad mundial.
            Su riqueza natural abarca desde selvas tropicales hasta desiertos, costas y sistemas montañosos.
          </p>
        </AnimateIn>
      </div>

      {/* Image + Renovables grid */}
      <div className="grid md:grid-cols-2 border-t border-primary">
        <div className="overflow-hidden">
          <img
            src={recursosImg}
            alt="Selva y río en las montañas de México"
            className="w-full h-full object-cover min-h-[400px]"
            loading="lazy"
          />
        </div>
        <div className="border-l border-primary/30">
          <div className="p-6 md:p-10 border-b border-primary/30">
            <AnimateIn>
              <h3 className="font-display text-2xl font-bold mb-2">Recursos Renovables</h3>
              <p className="font-body text-sm text-muted-foreground">
                Fuentes de energía y materias primas que se regeneran naturalmente.
              </p>
            </AnimateIn>
          </div>
          {renovables.map((r, i) => (
            <AnimateIn key={r.title}>
              <div className={`tectonic-card flex gap-4 ${i < renovables.length - 1 ? "border-b border-primary/30" : ""}`}>
                <r.icon className="w-6 h-6 flex-shrink-0 text-primary mt-1" />
                <div>
                  <h4 className="font-display text-lg font-semibold">{r.title}</h4>
                  <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* No renovables */}
      <div className="border-t border-primary">
        <div className="p-6 md:p-10 border-b border-primary/30">
          <AnimateIn>
            <h3 className="font-display text-2xl font-bold mb-2">Recursos No Renovables</h3>
            <p className="font-body text-sm text-muted-foreground">
              Recursos que se agotan con la explotación y no se regeneran en escalas humanas de tiempo.
            </p>
          </AnimateIn>
        </div>
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/30">
          {noRenovables.map((r) => (
            <AnimateIn key={r.title}>
              <div className="tectonic-card h-full">
                <r.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-display text-lg font-semibold mb-2">{r.title}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* Problemas ambientales */}
      <div className="border-t border-primary section-agave">
        <div className="p-6 md:p-12 lg:p-20">
          <AnimateIn>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary-foreground/60 mb-4">
              Crisis ambiental
            </p>
            <h3 className="font-display text-3xl md:text-5xl font-bold mb-6">Problemas Ambientales</h3>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-px mt-8">
            {[
              { stat: "150K", unit: "ha/año", label: "de deforestación" },
              { stat: "70%", unit: "", label: "de cuerpos de agua contaminados" },
              { stat: "2,500+", unit: "", label: "especies en riesgo de extinción" },
            ].map((d) => (
              <AnimateIn key={d.label}>
                <div className="border border-primary-foreground/20 p-6 md:p-8">
                  <span className="data-block text-primary-foreground">
                    {d.stat}
                    <span className="text-lg font-body font-normal ml-1">{d.unit}</span>
                  </span>
                  <p className="font-body text-sm text-primary-foreground/70 mt-2">{d.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn className="mt-8 max-w-2xl">
            <p className="font-body text-sm text-primary-foreground/80 leading-relaxed">
              La sobreexplotación de recursos, el crecimiento urbano descontrolado y la falta de regulación
              efectiva han generado una crisis ambiental que amenaza directamente la biodiversidad y
              la calidad de vida de millones de mexicanos.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};

export default RecursosNaturalesSection;
