import { useEffect, useRef, useState } from "react";
import agropecuarioImg from "@/assets/agropecuario.jpg";
import industriaImg from "@/assets/industria.jpg";
import serviciosImg from "@/assets/servicios.jpg";
import { Truck, Wifi, Home, Droplets as WaterIcon, GraduationCap } from "lucide-react";

const AnimateIn = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
};

const sectors = [
  {
    img: agropecuarioImg,
    alt: "Agricultor en campos de maíz de México",
    label: "Sector Primario",
    title: "Desarrollo Agropecuario",
    pib: "3.8%",
    desc: "La agricultura, ganadería, silvicultura y pesca constituyen la base histórica de la economía mexicana. México es líder mundial en producción de aguacate, limón, chile y cerveza. Sin embargo, el campo enfrenta baja productividad, minifundismo y falta de inversión tecnológica.",
    facts: [
      "22 millones de hectáreas cultivadas",
      "5.5 millones de trabajadores agrícolas",
      "Exportaciones agrícolas: $40,000 MDD anuales",
    ],
  },
  {
    img: industriaImg,
    alt: "Fábrica industrial mexicana al atardecer",
    label: "Sector Secundario",
    title: "Desarrollo Industrial",
    pib: "29.5%",
    desc: "El sector industrial mexicano es el motor de las exportaciones, dominado por la industria manufacturera, automotriz y electrónica. Las maquiladoras y el T-MEC han convertido a México en plataforma de manufactura global, aunque persisten retos de valor agregado y dependencia tecnológica.",
    facts: [
      "México: 1er exportador automotriz de América Latina",
      "Sector manufacturero: 17% del PIB",
      "Más de 5,000 maquiladoras en la frontera norte",
    ],
  },
  {
    img: serviciosImg,
    alt: "Mercado mexicano tradicional con vendedores",
    label: "Sector Terciario",
    title: "Desarrollo de Servicios",
    pib: "63.8%",
    desc: "El sector servicios es la columna vertebral de la economía moderna de México, abarcando comercio, turismo, finanzas, telecomunicaciones y servicios profesionales. El turismo por sí solo contribuye con más de 8% del PIB.",
    facts: [
      "Turismo: 45 millones de visitantes internacionales/año",
      "Comercio: mayor empleador del sector terciario",
      "Servicios financieros en expansión digital",
    ],
  },
];

const serviciosDetalle = [
  {
    icon: Truck,
    title: "Transporte",
    desc: "Red carretera de 407,000 km, sistema ferroviario en crecimiento con el Tren Maya y el Interoceánico. Los puertos de Manzanillo y Lázaro Cárdenas son claves para el comercio internacional.",
  },
  {
    icon: Wifi,
    title: "Telecomunicaciones",
    desc: "84 millones de usuarios de internet. La reforma de telecomunicaciones de 2013 transformó el sector, aunque persiste la brecha digital entre zonas urbanas y rurales.",
  },
  {
    icon: Home,
    title: "Vivienda",
    desc: "Déficit habitacional de 8.5 millones de viviendas. Los programas de INFONAVIT y FOVISSSTE atienden la demanda, pero la autoconstrucción informal sigue siendo la norma en muchas regiones.",
  },
  {
    icon: WaterIcon,
    title: "Agua Potable y Alcantarillado",
    desc: "95% de cobertura de agua potable en zonas urbanas, pero solo 85% en rurales. El estrés hídrico afecta al 70% del territorio nacional.",
  },
  {
    icon: GraduationCap,
    title: "Educación",
    desc: "La educación es el factor clave para el desarrollo. México invierte 4.9% del PIB en educación. Con 36 millones de estudiantes, el sistema educativo es uno de los más grandes de América Latina, pero la calidad y equidad siguen siendo retos fundamentales.",
  },
];

const SectoresEconomicosSection = () => {
  return (
    <section id="sectores" className="border-t border-primary">
      <div className="p-6 md:p-12 lg:p-20">
        <AnimateIn>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            03 — El Paisaje Económico
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Sectores Económicos
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl mt-6 leading-relaxed">
            La economía mexicana se estructura en tres sectores que revelan la transición
            de un país agrario a una potencia de servicios y manufactura.
          </p>
        </AnimateIn>
      </div>

      {/* PIB Treemap-style blocks */}
      <div className="border-t border-primary">
        <AnimateIn>
          <div className="flex h-16 md:h-24">
            <div className="bg-primary flex items-center justify-center" style={{ width: "3.8%" }}>
              <span className="font-body text-[10px] text-primary-foreground hidden md:block">3.8%</span>
            </div>
            <div className="bg-grana flex items-center justify-center border-l border-background" style={{ width: "29.5%" }}>
              <span className="font-body text-xs text-grana-foreground">Industria 29.5%</span>
            </div>
            <div className="bg-recinto flex items-center justify-center border-l border-background" style={{ width: "66.7%" }}>
              <span className="font-body text-xs text-recinto-foreground">Servicios 63.8%</span>
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Horizontal scroll sectors */}
      <div className="border-t border-primary">
        <div className="horizontal-scroll">
          {sectors.map((s) => (
            <div key={s.title} className="snap-section w-[90vw] md:w-[70vw] flex-shrink-0 border-r border-primary/30 last:border-r-0">
              <div className="grid md:grid-cols-2 h-full">
                <div className="overflow-hidden h-[300px] md:h-auto">
                  <img src={s.img} alt={s.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center border-l border-primary/30">
                  <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">{s.label}</span>
                  <h3 className="font-display text-3xl font-bold mt-2">{s.title}</h3>
                  <span className="font-display text-5xl font-bold text-primary mt-2">{s.pib}</span>
                  <span className="font-body text-xs text-muted-foreground">del PIB</span>
                  <p className="font-body text-sm text-muted-foreground mt-4 leading-relaxed">{s.desc}</p>
                  <ul className="mt-4 space-y-1">
                    {s.facts.map((f) => (
                      <li key={f} className="font-body text-xs text-foreground flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 bg-grana mt-1.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-primary/30 p-4 text-center">
          <span className="font-body text-xs text-muted-foreground tracking-wide">← Desliza para explorar los sectores →</span>
        </div>
      </div>

      {/* Servicios detail */}
      <div className="border-t border-primary section-agave">
        <div className="p-6 md:p-12 lg:p-20">
          <AnimateIn>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-2">Infraestructura y Servicios</h3>
            <p className="font-body text-sm text-primary-foreground/70 max-w-xl">
              Los pilares que sostienen el funcionamiento cotidiano del país.
            </p>
          </AnimateIn>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-primary-foreground/20">
          {serviciosDetalle.map((s, i) => (
            <AnimateIn key={s.title}>
              <div className={`p-6 md:p-8 border-b border-r border-primary-foreground/20 ${i === serviciosDetalle.length - 1 ? "lg:col-span-1" : ""}`}>
                <s.icon className="w-6 h-6 text-primary-foreground/60 mb-4" />
                <h4 className="font-display text-lg font-semibold">{s.title}</h4>
                <p className="font-body text-sm text-primary-foreground/70 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectoresEconomicosSection;
