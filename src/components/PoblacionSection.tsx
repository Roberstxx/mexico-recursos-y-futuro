import { useEffect, useRef, useState } from "react";

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
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
};

const PoblacionSection = () => {
  return (
    <section id="poblacion" className="border-t border-primary">
      {/* Collision moment - Recinto background */}
      <div className="section-recinto">
        <div className="p-6 md:p-12 lg:p-20">
          <AnimateIn>
            <p className="font-body text-xs uppercase tracking-[0.3em] opacity-50 mb-4">
              02 — La Fractura
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
              La riqueza de la tierra,<br />
              <span className="grana-accent">la necesidad de su gente</span>
            </h2>
            <p className="font-body text-base opacity-70 max-w-2xl mt-6 leading-relaxed">
              A pesar de su inmensa riqueza natural, México enfrenta profundas desigualdades sociales.
              La paradoja central del país: abundancia de recursos junto a pobreza persistente.
            </p>
          </AnimateIn>
        </div>

        {/* Data visualization - large typography blocks */}
        <div className="grid md:grid-cols-2 border-t" style={{ borderColor: "hsl(var(--grana) / 0.3)" }}>
          <AnimateIn>
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r" style={{ borderColor: "hsl(var(--grana) / 0.3)" }}>
              <span className="data-block grana-accent">43.9%</span>
              <h3 className="font-display text-xl font-bold mt-4">Pobreza</h3>
              <p className="font-body text-sm opacity-70 mt-2 leading-relaxed max-w-md">
                Según CONEVAL, 55.7 millones de personas viven en situación de pobreza en México.
                8.5 millones en pobreza extrema, sin acceso a alimentación adecuada.
                La pobreza se concentra en los estados del sur: Chiapas, Guerrero y Oaxaca.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn>
            <div className="p-8 md:p-12">
              <span className="data-block grana-accent">55.6%</span>
              <h3 className="font-display text-xl font-bold mt-4">Economía Informal</h3>
              <p className="font-body text-sm opacity-70 mt-2 leading-relaxed max-w-md">
                Más de la mitad de la población ocupada trabaja en la informalidad,
                sin acceso a seguridad social, prestaciones laborales ni estabilidad económica.
                Es el reflejo estructural de un modelo que no incluye a todos.
              </p>
            </div>
          </AnimateIn>
        </div>

        <div className="border-t p-8 md:p-12" style={{ borderColor: "hsl(var(--grana) / 0.3)" }}>
          <AnimateIn>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <span className="font-display text-3xl font-bold grana-accent">3.3%</span>
                <h4 className="font-display text-lg font-semibold mt-2">Desempleo</h4>
                <p className="font-body text-sm opacity-70 mt-1 leading-relaxed">
                  Aunque la tasa oficial parece baja, no refleja el subempleo ni las condiciones
                  precarias de millones de trabajadores.
                </p>
              </div>
              <div>
                <span className="font-display text-3xl font-bold grana-accent">21M</span>
                <h4 className="font-display text-lg font-semibold mt-2">Sin Acceso a Salud</h4>
                <p className="font-body text-sm opacity-70 mt-1 leading-relaxed">
                  Millones de mexicanos carecen de acceso efectivo a servicios de salud,
                  agravando las condiciones de vulnerabilidad.
                </p>
              </div>
              <div>
                <span className="font-display text-3xl font-bold grana-accent">16.2%</span>
                <h4 className="font-display text-lg font-semibold mt-2">Rezago Educativo</h4>
                <p className="font-body text-sm opacity-70 mt-1 leading-relaxed">
                  Más de 19 millones de personas de 15 años o más no completaron
                  la educación básica obligatoria.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};

export default PoblacionSection;
